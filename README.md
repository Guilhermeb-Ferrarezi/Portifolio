# 🎨 Portfólio Moderno com React, Tailwind CSS e Motion

Um portfólio full-stack bonito e responsivo com animações incríveis em roxo e rosa.

## ✨ Características

- **Design Moderno**: Paleta de cores roxo (#8B5CF6) e rosa (#EC4899)
- **Animações Suaves**: Usando a biblioteca Motion para transições fluidas
- **Fade-in ao Scroll**: Elementos aparecem com animação ao entrar na viewport
- **Hover Effects**: Interações visuais elegantes
- **Background Animado**: Partículas e gradientes em movimento
- **Responsivo**: Layout adaptável para todos os dispositivos
- **Performance**: Otimizado com React 19 e Vite

## 🛠️ Tecnologias

- **React 19** - Framework UI
- **TypeScript** - Tipagem segura
- **Tailwind CSS 4** - Estilização utilitária
- **Motion** - Animações de componentes
- **Vite** - Build tool rápido
- **Bun** - Package manager & runtime

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── AnimatedBackground.tsx    # Fundo com partículas animadas
│   ├── FadeInOnScroll.tsx        # Hook de fade-in ao scroll
│   ├── HeroSection.tsx           # Seção inicial
│   ├── ProjectsSection.tsx       # Seção de projetos
│   ├── AboutSection.tsx          # Seção sobre mim
│   ├── ContactSection.tsx        # Seção de contato
│   ├── Navbar.tsx                # Navegação
│   └── Footer.tsx                # Rodapé
├── App.tsx                       # Componente principal
└── index.css                     # Estilos globais
```

## 🚀 Como Usar

### Instalação

```bash
# Com Bun (recomendado)
bun install

# Ou com npm
npm install
```

### Desenvolvimento

```bash
# Com Bun
bun run dev

# Ou com npm
npm run dev
```

O servidor estará disponível em `http://localhost:5174/`

### Build para Produção

```bash
# Com Bun
bun run build

# Ou com npm
npm run build
```

## 🎨 Personalizando o Portfólio

### Mudar Cores

As cores estão definidas em `src/index.css`. Procure por:

```css
:root {
  --primary: #8B5CF6;      /* Roxo */
  --secondary: #EC4899;    /* Rosa */
}
```

### Adicionar Novos Projetos

Edite o array `projects` em `src/components/ProjectsSection.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Seu Projeto',
    description: 'Descrição aqui',
    tags: ['Tech1', 'Tech2'],
    image: 'URL_DA_IMAGEM',
    link: '#',
    github: '#',
  },
  // ... mais projetos
];
```

### Personalizar Informações

1. **Hero Section**: Edite `src/components/HeroSection.tsx`
2. **About Section**: Edite `src/components/AboutSection.tsx`
3. **Contact Section**: Edite `src/components/ContactSection.tsx`

### Modificar Animações

Todas as animações usam a biblioteca `motion`. Exemplos:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Conteúdo
</motion.div>
```

Veja a [documentação do Motion](https://www.motion.dev/) para mais opções.

## 🎯 Componentes Principais

### FadeInOnScroll
Componente que anima elementos quando entram na viewport.

```typescript
<FadeInOnScroll delay={0.2}>
  <h2>Título com animação</h2>
</FadeInOnScroll>
```

### AnimatedBackground
Fundo com partículas animadas e gradientes em movimento. Já está implementado no App.tsx.

## 📱 Responsividade

O portfólio é totalmente responsivo usando Tailwind CSS:
- Layout adaptável para mobile, tablet e desktop
- Menu hamburger mobile automático
- Grid flexível para projetos

## 🔗 Links Úteis

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion Documentation](https://www.motion.dev/)
- [Vite](https://vitejs.dev)
- [Bun](https://bun.sh)

## 📝 Tips & Truques

### Smooth Scroll
O portfólio já tem scroll suave habilitado em `src/index.css`.

### Customizar Scrollbar
Edite as propriedades CSS para `::-webkit-scrollbar` em `src/index.css`.

### Adicionar Mais Seções
1. Crie um novo componente em `src/components/`
2. Importe em `src/App.tsx`
3. Adicione uma nova `<section>` com um id

## 🚀 Deploy

### Vercel

```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build primeiro
bun run build

# Deploy da pasta dist
# Use o Netlify drop (arrastar e soltar)
```

## 💡 Sugestões de Melhoria

- [ ] Adicionar modo dark/light toggle
- [ ] Integrar formulário com backend
- [ ] Adicionar blog section
- [ ] Analytics com Vercel ou Plausible
- [ ] Otimização de imagens com next-image

---

**Desenvolvido com ♥ usando React, Tailwind CSS e Motion**
