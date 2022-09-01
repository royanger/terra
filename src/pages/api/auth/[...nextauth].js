import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from '../../../utils/db.server'
import { z } from 'zod'
import bcrypt from 'bcrypt'

export const authOptions = {
   session: {
      strategy: 'jwt',
   },
   pages: {
      signIn: '/auth/login',
   },
   // TODO not returning the ID. Maybe revisit this
   callbacks: {
      callbacks: {
         session({ session, user }) {
            if (session.user) {
               session.user.id = user.id
            }
            return session
         },
         jwt: async ({ user, token }) => {
            if (user) {
               token.uid = user.id
            }
            return token
         },
      },
   },
   adapter: PrismaAdapter(db),
   providers: [
      FacebookProvider({
         clientId: process.env.FACEBOOK_APP_ID,
         clientSecret: process.env.FACEBOOK_APP_SECRET,
      }),
      GoogleProvider({
         clientId: process.env.GOOGLE_API_ID,
         clientSecret: process.env.GOOGLE_API_SECRET,
      }),
      CredentialsProvider({
         _name: 'Sign in',
         get name() {
            return this._name
         },
         set name(value) {
            this._name = value
         },
         credentials: {
            username: {
               label: 'Email',
               type: 'text',
               placeholder: 'Your email',
            },
            password: { label: 'Password', type: 'password' },
         },
         async authorize(credentials) {
            const Credentials = z.object({
               email: z.string().email(),
               password: z.string(),
            })

            const parsedCredentials = Credentials.parse(credentials)

            const user = await db.user.findUnique({
               where: {
                  email: parsedCredentials.email,
               },
            })

            if (!user) return null

            // compare hashed+stored password to entered password
            if (!bcrypt.compareSync(parsedCredentials.password, user.password))
               return null

            // user logged in, return session
            return user
         },
      }),
   ],
}

export default NextAuth(authOptions)
