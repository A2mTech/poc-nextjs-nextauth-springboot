import NextAuth from "next-auth"

export default NextAuth({
    providers: [],
    callbacks: {
        session({ session, token, user }) {
            return session // The return type will match the one returned in `useSession()`
        },
    }
})