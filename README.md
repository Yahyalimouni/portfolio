## Project Set up:

1. Create the project environment picking React + TypeScript:
```bash
  npm create vite@latest portfolio
  cd portfolio
  npm install
```

2. Install TailwindCSS:
```bash
  npm install tailwindcss @tailwindcss/vite
```

3. Include TailwindCSS's plugin in `vite.config.js`:

```js
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'

  // https://vite.dev/config/
  export default defineConfig({
    plugins: [react(), tailwindcss()],
  })

```


