# Odonto Docs

Sistema de receituário odontológico digital desenvolvido com Nuxt.js e Vue 3.

## 📋 Sobre o Projeto

O Odonto Docs é uma aplicação web que permite aos profissionais odontológicos criar receituários digitais de forma prática e eficiente. O sistema permite adicionar medicamentos a uma prescrição e gerar automaticamente um PDF com o receituário preenchido.

## ✨ Funcionalidades

- 📝 Criação de receituários digitais
- 💊 Adição e remoção de medicamentos
- 📄 Geração automática de PDF
- 👁️ Visualização em tempo real do receituário
- 📱 Interface responsiva
- 🎨 Design moderno com Tailwind CSS

## 🚀 Tecnologias

- **Framework**: [Nuxt.js 4](https://nuxt.com/)
- **Frontend**: Vue 3 + TypeScript
- **UI**: Nuxt UI + Tailwind CSS
- **PDF**: pdf-lib para manipulação de PDFs
- **Ícones**: Nuxt Icon + Iconify
- **Fontes**: Nuxt Fonts

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ ou Bun
- npm, pnpm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd odonto-docs
```

2. Instale as dependências:
```bash
npm install
# ou
pnpm install
# ou
yarn install
# ou
bun install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse http://localhost:3000

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Gerar site estático
npm run generate

# Preview do build de produção
npm run preview

# Preparar dependências do Nuxt
npm run postinstall

# Linting
npm run lint
npm run lint:fix
```

## 📁 Estrutura do Projeto

```
app/
├── assets/          # Assets CSS
├── components/      # Componentes Vue
│   ├── ConfigPanel.vue    # Painel de configuração
│   └── PDFPreview.vue     # Visualizador de PDF
├── composables/     # Composables Vue
│   ├── useMedications.ts  # Gerenciamento de medicamentos
│   └── usePrescription.ts # Gerenciamento de prescrições
├── layouts/         # Layouts da aplicação
├── pages/           # Páginas da aplicação
└── app.vue         # Componente raiz

public/
├── assets/
│   └── receituario.pdf    # Template base do receituário
└── favicon.ico
```

## 🎯 Como Usar

1. **Adicionar Medicamentos**: Use o painel de configuração para adicionar medicamentos à prescrição
2. **Visualizar**: O PDF é atualizado automaticamente com os medicamentos adicionados
3. **Download**: Clique no botão de download para baixar o receituário preenchido

## ⚙️ Configuração

O projeto utiliza as seguintes configurações principais:

- **Nuxt Config**: Configurado para usar Tailwind CSS, Nuxt UI, ícones e fontes
- **TypeScript**: Totalmente tipado para melhor experiência de desenvolvimento
- **ESLint**: Configurado para manter a qualidade do código

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de uso privado.

## 🔧 Desenvolvimento

### Requisitos de Sistema

- Node.js 18+
- NPM 8+ ou gerenciador de pacotes equivalente

### Configuração do Ambiente

O projeto utiliza as seguintes dependências principais:
- Nuxt.js para SSR/SPA
- pdf-lib para manipulação de PDFs
- Tailwind CSS para estilização
- TypeScript para tipagem

### Build e Deploy

Para fazer o build do projeto:

```bash
npm run build
```

Para gerar um site estático:

```bash
npm run generate
```
