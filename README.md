# Portfólio Veroni - Desenvolvedor Full Stack

Um portfólio profissional moderno e responsivo com sistema de gerenciamento de conteúdo, inspirado nos melhores sites de desenvolvedores.

## 🚀 Características

### Frontend
- **Next.js 14** com App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **Lucide React** para ícones
- Design responsivo e moderno
- Animações suaves e interativas

### Seções do Portfólio
- **Hero** - Apresentação impactante
- **Sobre** - Informações pessoais e experiência
- **Projetos** - Showcase de trabalhos com vídeos
- **Tutoriais** - Blog com conteúdo educativo
- **Stack Tecnológica** - Habilidades e tecnologias
- **Contato** - Formulário e informações de contato

### Sistema Administrativo
- **Autenticação segura** com NextAuth.js
- **Painel de controle** para gerenciar conteúdo
- **Upload de vídeos** para projetos
- **Gerenciamento de tutoriais** e blog
- **Estatísticas** e métricas

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/portifolio-veroni.git
cd portifolio-veroni
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local`:
```env
NEXTAUTH_SECRET=sua-chave-secreta-aqui
NEXTAUTH_URL=http://localhost:3000
```

4. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. **Acesse o projeto**
- Frontend: http://localhost:3000
- Painel Admin: http://localhost:3000/admin/login

## 🔐 Credenciais do Painel Administrativo

Para acessar o painel administrativo, use as seguintes credenciais:

- **Usuário:** admin
- **Senha:** admin123

⚠️ **Importante:** Em produção, altere essas credenciais no arquivo `app/api/auth/[...nextauth]/route.ts`

## 📁 Estrutura do Projeto

```
portifolio-veroni/
├── app/
│   ├── admin/                 # Painel administrativo
│   │   ├── dashboard/         # Dashboard principal
│   │   └── login/            # Página de login
│   ├── api/
│   │   └── auth/             # API de autenticação
│   ├── globals.css           # Estilos globais
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Página inicial
│   └── providers.tsx         # Providers da aplicação
├── components/               # Componentes React
│   ├── Header.tsx           # Navegação principal
│   ├── Hero.tsx             # Seção hero
│   ├── About.tsx            # Seção sobre
│   ├── Projects.tsx         # Seção projetos
│   ├── Tutorials.tsx        # Seção tutoriais
│   ├── TechStack.tsx        # Seção stack tecnológica
│   ├── Contact.tsx          # Seção contato
│   ├── Footer.tsx           # Rodapé
│   └── LoadingScreen.tsx    # Tela de carregamento
├── public/                  # Arquivos estáticos
├── package.json
├── tailwind.config.js       # Configuração Tailwind
├── next.config.js           # Configuração Next.js
└── README.md
```

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... outras variações
  },
  dark: {
    50: '#f8fafc',
    100: '#f1f5f9',
    // ... outras variações
  }
}
```

### Conteúdo
- **Informações pessoais:** Edite o componente `About.tsx`
- **Projetos:** Modifique o array de projetos em `Projects.tsx`
- **Tutoriais:** Atualize o conteúdo em `Tutorials.tsx`
- **Stack tecnológica:** Personalize as tecnologias em `TechStack.tsx`

### Metadados
Atualize as informações do site no arquivo `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Seu Nome - Desenvolvedor Full Stack',
  description: 'Sua descrição personalizada',
  // ... outras configurações
}
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Outras Plataformas
O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- DigitalOcean
- AWS Amplify

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona perfeitamente em:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px)

## 🔧 Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React
- **TypeScript** - Linguagem tipada
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animações
- **Lucide React** - Ícones

### Backend
- **NextAuth.js** - Autenticação
- **bcryptjs** - Hash de senhas
- **JSON Web Tokens** - Sessões

### Desenvolvimento
- **ESLint** - Linting
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Prefixos CSS

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Se você tiver alguma dúvida ou problema:

1. Abra uma [issue](https://github.com/seu-usuario/portifolio-veroni/issues)
2. Entre em contato: contato@veroni.dev

## 🙏 Agradecimentos

- Inspirado nos portfólios de desenvolvedores incríveis
- Comunidade Next.js e React
- Tailwind CSS por um framework CSS incrível
- Framer Motion por animações suaves

---

**Desenvolvido com ❤️ por Veroni** 