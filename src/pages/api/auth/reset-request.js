import { z } from 'zod'
import { db } from '../../..//utils/db.server'
import { v4 as uuidv4 } from 'uuid'
import { resetEmail } from '../../..//utils/resetEmail'

export default async function handler(req, res) {
   // validate incoming email
   const Email = z.object({
      email: z.string().email(),
   })

   const parsedData = Email.parse(req.body)

   const userData = await db.user.findUnique({
      where: {
         email: parsedData.email,
      },
      include: {
         accounts: true,
      },
   })

   // check if email exists, if not pretend things succeeded
   // return a 200 -- pretend user email exists
   if (!userData)
      return res.status(200).json({
         type: 'ResetOk',
         message: 'Reset email sent',
         email: parsedData.email,
      })

   // check if email uses Credentials, if not pretend things succeeded
   // return a 200 -- pretend user email exists
   if (userData.accounts[0].provider !== 'credentials')
      return res.status(400).json({
         type: 'ResetOk',
         message: 'Reset email sent',
         email: parsedData.email,
      })

   // delete existing codes for user
   await db.reset.deleteMany({
      where: {
         userId: userData.id,
      },
   })

   // create a code to the reset process
   const resetCode = uuidv4()

   // add code to Reset table
   await db.reset.create({
      data: {
         code: resetCode,
         userId: userData.id,
      },
   })
   // send verification email
   await resetEmail(parsedData.email, resetCode)

   return res.status(200).json({
      type: 'ResetOk',
      message: 'Reset email sent',
      email: parsedData.email,
   })
}
