import { db } from '../../utils/db.server'

export default async function handler(req, res) {
   const data = await db.facts.findMany({})
   res.status(200).json({ facts: data })
}
