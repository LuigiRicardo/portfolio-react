<div align="center">

# Portfolio React 🚀

Um portfólio pessoal moderno, responsivo e profissional construído com **React**, **Vite** e **i18n**.

[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.2-purple?logo=vite)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Portfolio Live](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://LuigiRicardo.github.io/portfolio-react)

[Demo](#-demo) • [Requisitos](#-requisitos) • [Estrutura](#-estrutura)

</div>

---

## 📋 Sobre o Projeto

Um portfólio responsivo e profissional que demonstra habilidades em desenvolvimento **fullstack**. O projeto implementa boas práticas modernas como:

- ✅ **Code splitting automático** com lazy loading
- ✅ **Otimizações de performance** (compressão, CSS injetado)
- ✅ **Suporte multilíngue** (PT-BR e EN)
- ✅ **SEO friendly** com Helmet
- ✅ **Responsivo** e acessível (ARIA labels)
- ✅ **Dark mode ready**
- ✅ **Deploy automático** com GitHub Pages

---

## 🎨 Demo

Veja o portfólio ao vivo: [Portfolio Live](https://LuigiRicardo.github.io/portfolio-react)

**Seções:**
- Sobre Mim
- Educação
- Experiência
- Projetos

---

## 🛠️ Tech Stack

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 18.3 | UI Framework |
| **Vite** | 7.2 | Build tool & Dev server |
| **i18next** | 25.8 | Internacionalização |
| **React Helmet** | 2.0 | SEO & Meta tags |
| **ESLint** | 9.39 | Linting |
| **Vite Plugins** | - | Compressão & CSS injection |

---

## 📋 Requisitos

- **Node.js** >= 18.x
- **npm** >= 10.x (ou yarn/pnpm)
- Git

## 📖 Uso

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev           # Inicia dev server com HMR

# Build
npm run build         # Cria build otimizado para produção
npm run preview       # Visualiza build localmente

# Deploy
npm run deploy        # Faz deploy no GitHub Pages (após build)

# Linting
npm run lint          # Verifica erros com ESLint
```

---

## 📁 Estrutura do Projeto

```bash
portfolio-react/
├── src/
│   ├── components/
│   │   ├── About.jsx          # Seção sobre
│   │   ├── Education.jsx      # Seção educação (lazy)
│   │   ├── Experience.jsx     # Seção experiência (lazy)
│   │   ├── Projects.jsx       # Seção projetos (lazy)
│   │   └── Sidebar.jsx        # Navegação + perfil
│   ├── locales/
│   │   ├── pt.json            # Strings em português
│   │   └── en.json            # Strings em inglês
│   ├── assets/
│   │   └── img/               # Imagens otimizadas
│   ├── App.jsx
│   ├── App.css
│   ├── i18n.js               # Configuração i18next
│   └── main.jsx
├── public/
│   ├── fonts/                 # Fontes do Google fonts
│   ├── robots.txt
│   └── sitemap.xml
├── vite.config.js            # Config Vite + plugins
├── eslint.config.js          # Config ESLint
├── index.html
├── package.json
└── README.md
```

### Lazy Loading Strategy

Componentes **dinamicamente carregados** para otimizar performance inicial:
- `Experience` ⏱️ Carregado quando aba Experience é aberta
- `Projects` ⏱️ Carregado quando aba Projects é aberta
- `Education` ⏱️ Carregado quando aba Education é aberta
- `About` 📍 Carregado imediatamente (seção inicial)

---

## 🌍 Internacionalização

O projeto suporta múltiplos idiomas via **i18next**:

```javascript
// Em qualquer componente
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();
  return <h1>{t('about.title')}</h1>;
}
```

**Idiomas suportados:**
- 🇧🇷 Português (Brasil)
- 🇺🇸 English

Adicione novos idiomas em `src/locales/`.

---

## 📊 Performance

- **Compressão Gzip** automática no build
- **Code splitting** inteligente com Vite
- **CSS injetado** no JS (otimização de requisições)
- **Lazy loading** de componentes pesados
- **Otimização de imagens** (recomenda-se usar WebP)

---

## ♿ Acessibilidade

O projeto implementa boas práticas de acessibilidade:
- ✅ ARIA labels em botões de navegação
- ✅ Skip links para conteúdo principal
- ✅ Navegação por teclado
- ✅ Meta tags semânticas

---

## Sobre

Desenvolvido por **Luigi Ricardo** como demonstração de habilidades em desenvolvimento web moderno.

- Email: [seu-email@example.com](mailto:seu-email@example.com)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/luigiricardo)
- GitHub: [@LuigiRicardo](https://github.com/LuigiRicardo)

---

<div align="center">

⭐ Se este projeto foi útil, considere dar uma star!

</div>
