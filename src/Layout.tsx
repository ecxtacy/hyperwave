import { Attributes, CustomElementHandler } from "typed-html";

export default function Layout({ children }: Attributes) {
  return (
    <html lang="en" hx-boost="true" hx-swap="outerHTML transition:true">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="hyperwave" />
        <title>hyperwave</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌊</text></svg>"
        />
        <script src="https://unpkg.com/htmx.org@1.9.5" />
        <script src="https://cdn.tailwindcss.com" />
        <script>htmx.config.globalViewTransitions = true</script>
      </head>

      <body class="bg-blue-100">
        <main class="bg-blue-100 sm:p-10 p-4 flex flex-col m-auto justify-center gap-8 max-w-5xl">
          {children}
        </main>
      </body>
    </html>
  );
}
