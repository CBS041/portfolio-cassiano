# 👨‍💻 Cassiano Brito dos Santos

<p align="center">
  <strong>Full Stack Developer</strong>
  <br />
  TypeScript • Node.js • React • Next.js
</p>

<p align="center">
  <a href="https://github.com/CBS041">
    <img src="https://img.shields.io/badge/GitHub-000?style=flat&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/cassiano-b-santos">
    <img src="https://img.shields.io/badge/LinkedIn-000?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://cassianodev.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-000?style=flat&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
</p>

---

## Sobre o projeto

Meu portfólio pessoal, desenvolvido para apresentar projetos, tecnologias e experiências como desenvolvedor.

A aplicação utiliza **Next.js, TypeScript e React**, com integração à API do GitHub para carregar os repositórios públicos de forma dinâmica.

Como diferencial, o projeto possui integração com **IA** para analisar os repositórios e apresentar informações técnicas sobre suas funcionalidades e tecnologias.

O próprio portfólio também funciona como um projeto de estudo contínuo, onde aplico práticas de **qualidade de código, testes, automação e integração contínua**.

---

## ✨ Principais recursos

- Integração com a **GitHub API**
- Carregamento dinâmico dos projetos
- Análise técnica de repositórios com **IA**
- Cache de requisições com **TanStack Query**
- Interface responsiva e componentizada
- Testes automatizados com **Jest**
- Type checking com **TypeScript**
- Linting e formatação automatizados
- Git Hooks com **Lefthook**
- CI/CD com **GitHub Actions**

---

## 🛠️ Stack

### Frontend

<p>
  <img src="https://img.shields.io/badge/-Next.js-000?style=flat&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/-React-000?style=flat&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/-TypeScript-000?style=flat&logo=typescript&logoColor=3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-000?style=flat&logo=tailwindcss&logoColor=06B6D4" alt="Tailwind CSS" />
</p>

### Backend & Data

<p>
  <img src="https://img.shields.io/badge/-Node.js-000?style=flat&logo=node.js&logoColor=339933" alt="Node.js" />
  <img src="https://img.shields.io/badge/-Bun-000?style=flat&logo=bun&logoColor=white" alt="Bun" />
  <img src="https://img.shields.io/badge/-Prisma-000?style=flat&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/-PostgreSQL-000?style=flat&logo=postgresql&logoColor=4169E1" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/-Redis-000?style=flat&logo=redis&logoColor=DC382D" alt="Redis" />
</p>

### Tooling & Quality

<p>
  <img src="https://img.shields.io/badge/-Jest-000?style=flat&logo=jest&logoColor=C21325" alt="Jest" />
  <img src="https://img.shields.io/badge/-GitHub_Actions-000?style=flat&logo=githubactions&logoColor=2088FF" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/-Docker-000?style=flat&logo=docker&logoColor=2496ED" alt="Docker" />
  <img src="https://img.shields.io/badge/-ESLint-000?style=flat&logo=eslint&logoColor=4B32C3" alt="ESLint" />
  <img src="https://img.shields.io/badge/-Prettier-000?style=flat&logo=prettier&logoColor=F7B93E" alt="Prettier" />
  <img src="https://img.shields.io/badge/-Git-000?style=flat&logo=git&logoColor=F05032" alt="Git" />
</p>

---

## 🏗️ Arquitetura

A aplicação segue uma estrutura simples e modular, mantendo responsabilidades separadas entre interface, componentes compartilhados e endpoints da aplicação.

```text
src/
├── app/
│   ├── api/
│   │   └── github/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── contact.tsx
│   ├── header.tsx
│   ├── profile.tsx
│   ├── projects.tsx
│   └── project-dialog.tsx
│
└── lib/
    └── types.ts
```

A integração com GitHub e o serviço de análise por IA ficam isolados nas **API Routes**, evitando expor credenciais e mantendo a lógica externa fora dos componentes de apresentação.

---

## 🤖 Integração com IA

A análise dos projetos segue um fluxo simples:

```text
GitHub Repository
       │
       ▼
    GitHub API
       │
       ▼
Arquivos relevantes
       │
       ▼
     Groq AI
       │
       ▼
Análise estruturada
       │
       ▼
   Interface
```

O sistema identifica arquivos relevantes do repositório, envia apenas o contexto necessário para o modelo e utiliza uma resposta estruturada para apresentar a análise no projeto.

---

## ⚡ Qualidade e automação

O projeto possui uma rotina de validação integrada ao desenvolvimento:

```text
Commit
  │
  ├── Prettier
  └── Commitlint
        │
        ▼
      Push
        │
        ├── TypeScript
        ├── ESLint
        └── Jest
```

No GitHub Actions, o código também passa por verificações automatizadas e build de produção antes de ser considerado válido.

---

## 🚀 Executando localmente

### Requisitos

- [Bun](https://bun.sh/)
- Node.js compatível com o projeto
- GitHub Token
- Groq API Key

### Instalação

```bash
git clone https://github.com/CBS041/portfolio-cassiano.git

cd portfolio-cassiano

bun install
```

Crie um arquivo `.env`:

```env
GROQ_API_KEY=""
GROQ_MODEL="openai/gpt-oss-120b"
GITHUB_TOKEN=""
NEXT_PUBLIC_AUTHOR_GITHUB=""
```

Inicie o ambiente:

```bash
bun dev
```

Acesse:

```text
http://localhost:3000
```

---

## 🧪 Scripts

| Comando             | Função                      |
| ------------------- | --------------------------- |
| `bun dev`           | Ambiente de desenvolvimento |
| `bun build`         | Build de produção           |
| `bun start`         | Executa o build             |
| `bun lint`          | ESLint                      |
| `bun typecheck`     | TypeScript                  |
| `bun test`          | Testes com Jest             |
| `bun test:coverage` | Testes + coverage           |
| `bun format`        | Prettier                    |

---

## 👨‍💻 Sobre mim

Sou estudante de **Engenharia de Software** e desenvolvedor focado em aplicações web.

Meu principal foco é **Full Stack**, com maior interesse em backend, arquitetura de aplicações e desenvolvimento de APIs.

**TypeScript · Node.js · React · Next.js · PostgreSQL · Prisma · Redis · Docker**

---

## 🔗 Links

<p>
  <a href="https://github.com/CBS041">
    <img src="https://img.shields.io/badge/GitHub-000?style=flat&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/cassiano-b-santos">
    <img src="https://img.shields.io/badge/LinkedIn-000?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://cassianodev.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-000?style=flat&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
</p>
