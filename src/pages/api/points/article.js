import { db } from '../../../utils/db.server'

export default async function handler(req, res) {
   console.log('req', req.body)

   // find user
   const user = await db.user.findUnique({
      where: {
         email: req.body.email,
      },
   })

   // see if the user has read the article
   const readArticle = await db.readFact.findMany({
      where: {
         AND: [
            {
               factId: req.body.articleId,
               userId: user.id,
            },
         ],
      },
   })

   console.log('test', readArticle)

   // if the user has read the article, error out and do not award points
   if (readArticle.length > 0) {
      return res.status(400).json({ message: 'User has read article' })
   }

   // update user with new points
   await db.user.update({
      where: {
         email: req.body.email,
      },
      data: {
         points: user.points + 1,
      },
   })

   // update log with info about action
   await db.pointsLogs.create({
      data: {
         userId: user.id,
         points: 1,
         action: `User read article ${req.body.articleId}`,
      },
   })

   // mark the article as read for that user
   await db.readFact.create({
      data: {
         factId: req.body.articleId,
         userId: user.id,
      },
   })

   res.status(200).json({ message: 'Successfully updated points' })
}
