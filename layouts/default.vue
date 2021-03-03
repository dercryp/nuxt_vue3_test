<template>
  <Nuxt />
</template>

<script>
export default {
  name: 'Layout',
  head() {
    return {
      title: 'RS Test',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Тестовое для RS на Nuxt.js' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

}
</script>
