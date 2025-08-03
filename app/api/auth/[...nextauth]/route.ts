import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        // Aqui você deve verificar contra seu banco de dados
        // Por enquanto, usando credenciais hardcoded para demonstração
        const adminUser = {
          id: '1',
          username: 'admin',
          password: '$2a$10$example.hash', // Senha: admin123
          role: 'admin'
        }

        // Em produção, verifique no banco de dados
        if (credentials.username === adminUser.username) {
          const isValidPassword = await bcrypt.compare(credentials.password, adminUser.password)
          
          if (isValidPassword) {
            return {
              id: adminUser.id,
              username: adminUser.username,
              role: adminUser.role,
            }
          }
        }

        return null
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.username = user.username
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role
        session.user.username = token.username
      }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key',
})

export { handler as GET, handler as POST } 