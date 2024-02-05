import redirects from '@/redirects';

export default defineNuxtRouteMiddleware((to) => {
  const target = redirects[to.path];
  if (target) {
    return navigateTo(target, { external: true });
  }
});
