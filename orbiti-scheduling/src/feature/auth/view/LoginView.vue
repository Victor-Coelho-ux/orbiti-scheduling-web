<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center text-center w-full px-10"
  >
    <header class="mb-6 flex flex-col items-center gap-4">
      <slot name="header" />
    </header>

    <main class="mb-6 w-full">
      <slot name="main" />
    </main>

    <footer>
      <slot name="footer">Default Footer Content</slot>
    </footer>
  </div>
</template>
