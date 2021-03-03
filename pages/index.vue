<template>
  <div>
    <div v-for="(a, i) in hotels" :key="i">
      {{ a.min_price }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      d: 123,
      hotels: []
    }
  },
  async fetch() {
    this.hotels = await this.$axios.get("/api/hotels/list")
  },
  async asyncData(a, b, c) {
  },
  watchQuery: ['page']
}
</script>
