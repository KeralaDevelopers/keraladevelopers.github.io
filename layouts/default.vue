<template>
  <div id="main" class="flex h-screen flex-col px-8 py-4">
    <Header class="mb-4" />
    <div class="grow overflow-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
#main {
  background-color: hsla(132, 100%, 88%, 1);
  background-image: radial-gradient(
      at 40% 20%,
      hsla(146, 100%, 100%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, hsla(151, 100%, 100%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(156, 100%, 100%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(160, 100%, 100%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(165, 100%, 100%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(170, 100%, 100%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(141, 100%, 100%, 1) 0px, transparent 50%);
}

@media (prefers-color-scheme: dark) {
  #main {
    background-color: hsla(186, 100%, 10%, 1);
    background-image: radial-gradient(
        at 40% 20%,
        hsla(179, 84%, 14%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 80% 0%, hsla(175, 96%, 12%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(170, 100%, 18%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 50%, hsla(165, 100%, 25%, 1) 0px, transparent 50%);
  }
}
</style>
