<template>
  <div>
    <v-btn @click="toggleSidebar()">サイドバー</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$store.dispatch('layout/toggleSidebar')
    },
  },
}
</script>
