//dynamix route inside api
import { connectToDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProviders from "next-auth/providers/google";
import User from "@models/user";

const handler = NextAuth({
  //specify provider eg google
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      //get user session after sign in
      //next js route are serveless route,get data from user everytime they log in to keep an existing running session
      //console.log(session)
      const userSession = await User.findOne({
        email: session.user.email,
      });
      session.user.id = userSession._id.toString();
      console.log("this is sessions", session);
      return session;
    },
    async signIn({ profile }) {
      console.log("this is  profile", profile);
      try {
        await connectToDB(); //connect to db note ones signed in user details are stored in the session
        const found_user = await User.find({
          email: profile.email,
        });
        console.log("found user is", found_user);
        if (found_user?.length==0) {
          let newUser = await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          })
          console.log(newUser)
        }

        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
});
export { handler as GET, handler as POST };
