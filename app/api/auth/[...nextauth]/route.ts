import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: { label: "name", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.name || !credentials?.password) {
          return null
        }

        // Aqui você deve verificar contra seu banco de dados
        // Por enquanto, usando credenciais hardcoded para demonstração
        const adminUser = {
          id: '1',
          name: 'admin',
          password: '$2a$10$example.hash', // Senha: admin123
          role: 'admin'
        }

        // Em produção, verifique no banco de dados
        if (credentials.name === adminUser.name) {
          const isValidPassword = await bcrypt.compare(credentials.password, adminUser.password)
          
          if (isValidPassword) {
            return {
              id: adminUser.id,
              name: adminUser.name,
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
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role
        session.user.name = token.name
      }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key',
})

export { handler as GET, handler as POST } 