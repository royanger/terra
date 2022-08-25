import { z } from 'zod';
import { db } from '../../../utils/db.server';

export default async function handler(req, res) {
   // validate incoming verification code - should be uuid
   const VerificationCode = z.object({
      code: z.string().uuid(),
   });

   const parsedCode = VerificationCode.parse(req.body);

   // query DB and see if code exists, get user id
   const verificationData = await db.verification.findFirst({
      where: {
         token: parsedCode.code,
      },
   });

   if (!verificationData)
      return res
         .status(400)
         .json({ type: 'error', message: 'Verification code was not found.' });

   // update user to indicate that email is verified
   const date = new Date();
   await db.user.update({
      where: {
         id: verificationData.userId,
      },
      data: {
         emailVerified: date,
      },
   });

   const user = await db.user.findUnique({
      where: {
         id: verificationData.userId,
      },
   });

   return res
      .status(200)
      .json({ type: 'VerifyOk', message: 'Verification successful' });
}
