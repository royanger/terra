import { z } from 'zod'
import bcrypt from 'bcrypt'
import { db } from '../../../utils/db.server'

export default async function handler(req, res) {
   // validate incoming data
   const Reset = z.object({
      code: z.string().uuid(),
      userId: z.string().cuid(),
      password: z.string().min(10),
      confirmPassword: z.string().min(10),
   })

   const parsedData = Reset.parse(req.body)

   if (parsedData.password !== parsedData.confirmPassword)
      return res
         .status(400)
         .json({ type: 'error', message: 'The passwords do not match' })

   // query DB and see if code exists, get code and user info
   const resetData = await db.reset.findUnique({
      where: {
         code: parsedData.code,
      },
      include: {
         user: true,
      },
   })

   if (!resetData)
      return res
         .status(400)
         .json({ type: 'error', message: 'Reset code not found' })

   // change password
   const saltRounds = 10
   const hashedPassword = bcrypt.hashSync(parsedData.password, saltRounds)

   await db.user.update({
      where: {
         id: parsedData.userId,
      },
      data: {
         password: hashedPassword,
      },
   })

   // delete reset code
   await db.reset.delete({
      where: {
         code: parsedData.code,
      },
   })

   return res.status(200).json({ type: 'ResetOk', message: 'Password reset' })
}
