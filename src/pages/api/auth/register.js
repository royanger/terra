import { z } from 'zod'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import { db } from '@/utils/db.server'
import { verifyEmail } from '@/utils/verifyEmail'

const Profile = z.object({
   email: z.string().email(),
   name: z.string().min(1),
   password: z.string().min(10),
   passwordconfirm: z.string(),
})

export default async function handler(req, res) {
   const parsedProfile = Profile.parse(req.body)

   if (parsedProfile.password !== parsedProfile.passwordconfirm) {
      return res
         .status(400)
         .json({ type: 'UserExists', message: 'Passwords do not match' })
   }

   const saltRounds = 10
   const hashedPassword = bcrypt.hashSync(parsedProfile.password, saltRounds)

   // check for existing user with submitted email
   const user = await db.user.findFirst({
      where: {
         email: parsedProfile.email,
      },
   })

   // stop processing if a user already exists and send error
   if (user) {
      return res
         .status(400)
         .json({ type: 'UserExists', message: 'User with that email exists.' })
   }

   // we want to keep using the User/Account tables to keep things aligned
   // because of that we can create a random id for the ProviderId
   const randomNumber = uuidv4()

   // create user in User and Account tables
   const newUser = await db.user.create({
      data: {
         email: parsedProfile.email,
         name: parsedProfile.name,
         password: hashedPassword,
         accounts: {
            create: {
               type: 'local',
               provider: 'credentials',
               providerAccountId: randomNumber,
            },
         },
      },
   })

   // create verification token
   const verificationToken = uuidv4()
   await db.verification.create({
      data: {
         token: verificationToken,
         userId: newUser.id,
      },
   })

   // send verification email
   await verifyEmail(parsedProfile.email, parsedProfile.name, verificationToken)

   res.status(200).json({
      message: 'User created and verification email sent',
      email: parsedProfile.email,
   })
}
