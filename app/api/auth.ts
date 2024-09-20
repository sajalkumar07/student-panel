import type { NextAuthOptions, DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
declare module "next-auth" {
  interface Session extends DefaultSession {
    idToken?: string;
  }
}

// Define authentication options using NextAuthOptions interface
export const authOptions: NextAuthOptions = {
  // Customize authentication pages
  pages: {
    signIn: "/student/auth", // Redirect users to "/login" when signing in
  },
  // Configure session management

  // added secret key
  secret: process.env.NEXT_PUBLIC_SECRET,
  // Configure authentication providers
  providers: [
    GoogleProvider({
      // Configure Google authentication provider with environment variables
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // CredentialsProvider({}), // Include a Credentials provider (username/password)
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account?.id_token) {
        token.idToken = account.id_token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.idToken = token.idToken as string;
      return session;
    },
  },
};
