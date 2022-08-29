import Mailjet from 'node-mailjet'

export const resetEmail = (email, code) => {
   const mailjet = new Mailjet({
      apiKey: process.env.MAILJET_API_KEY,
      apiSecret: process.env.MAILJET_SECRET_KEY,
   })

   const resetURL = `${process.env.APP_URL}/auth/password/${code}`
   const request = mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
         {
            From: {
               Email: 'info@savemrterra.com',
               Name: 'Terra',
            },
            To: [
               {
                  Email: email,
                  Name: email,
               },
            ],
            Subject: 'Reset your Password',
            TextPart: `Please use the following link to reset your password. ${resetURL}`,
            HTMLPart: `<h3>Reset Password</h3><p>Please use the following link to reset your password</p><p><a href="${resetURL}">${resetURL}</a></p>`,
         },
      ],
   })
   request
      .then(result => {
         console.log(result.body)
      })
      .catch(err => {
         console.log(err.statusCode)
      })
}
