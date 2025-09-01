export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.client) {
    await nextTick();
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) {
      return navigateTo('/desktop-warning');
    }
  }
});
