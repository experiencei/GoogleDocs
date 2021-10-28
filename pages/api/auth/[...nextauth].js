import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import db from '../../../components/firebase/firebase';


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
      adapter: FirebaseAdapter(db)

  // // A database is optional, but required to persist accounts in a database
//   database: process.env.DATABASE_URL,
})



// https://console.cloud.google.com/projectselector2/apis/credentials?supportedpurview=project


// 1092371208251-3q0mncktsoi6pp5v0s4qbp0th09vkup9.apps.googleusercontent.com



// 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



// 261862721458-9opnk6h2t577afrg35lir18ndmqb2g5l.apps.googleusercontent.com


// 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