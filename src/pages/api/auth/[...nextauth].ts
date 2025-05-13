/* eslint-disable @typescript-eslint/no-explicit-any */
import { signIn } from "@/services/auth/service";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await signIn(email);
        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            return user;
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
        token.id = user.id;
      }

      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }

      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }

      if ("role" in token) {
        session.user.role = token.role;
      }

      if ("id" in token) {
        session.user.id = token.id;
      }

      const accessToken = jwt.sign(token, process.env.NEXTAUTH_SECRET || "", {
        algorithm: "HS256",
      });

      session.accessToken = accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
  },
};

export default NextAuth(authOptions);
