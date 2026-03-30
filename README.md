/src
/components
Hero.tsx
Experience.tsx
Services.tsx
Contact.tsx
Footer.tsx
/styles
globals.css
App.tsx
main.tsx
index.html
tailwind.config.js
package.json

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## 📱 Atualizações de Responsividade (Modo Recursivo) 30032026

Implementação de design adaptável para dispositivos móveis e tablets:

- **Navbar Adaptativa**: Ajuste da largura da Sidebar (`max-w`) para diferentes breakpoints.
- **Interatividade Mobile**: Otimização do efeito de 'X' no menu hambúrguer e ajuste do overlay para toque.
- **Tipografia Escalonável**: Ajuste no rastreamento (tracking) e tamanho das fontes para leitura em telas menores.
- **Correção de Atributos**: Padronização das chaves do objeto de navegação para garantir renderização consistente.

- **Hero Adaptativo**: Reposicionamento dos balões informativos de 'Projetos' e 'Skills' para visualização vertical em smartphones.
- **Correção Técnica (Hero)**: Removido JSX Namespace inválido em ícones Lucide; o dimensionamento responsivo dos ícones agora é controlado via classes Tailwind (`w-` e `h-`) em vez de props de tamanho dinâmico.
- **Escalonamento de Títulos**: Redução dinâmica dos títulos monumentais (9xl para 5xl/6xl) para evitar overflow horizontal.
- **Grid de Serviços**: Ajuste da malha de 3 colunas para 1 coluna em telas < 768px, garantindo legibilidade.
- **Chat de IA**: Otimização do container de chat para ocupar a largura adequada em telas pequenas sem esconder o conteúdo.

- **Portfólio Responsivo**: Grid adaptativo (1 col mobile, 2 col tablet, 3 col desktop) e ajuste na altura das imagens dos projetos para telas menores.
- **Seção Expertise**: Empilhamento vertical dos cards de Alex e Larissa em dispositivos móveis, com centralização do botão de currículo.
- **Formulário de Contato**: Ajuste do layout de duas colunas para fluxo vertical, garantindo que o formulário ocupe a largura total no celular sem quebrar o design.
- **Otimização de Padding**: Ajuste global dos paddings (`py-24` para `py-16` em mobile) para melhor aproveitamento do espaço vertical.
