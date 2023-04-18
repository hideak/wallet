// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/styles/global.scss',
        '@/styles/transitions.scss',
        "bootstrap/scss/bootstrap.scss",
        'bootstrap-icons/font/bootstrap-icons.scss',
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    }
});
