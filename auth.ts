import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
 
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Google
  ],
});