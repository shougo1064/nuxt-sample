<template>
  <div class="container">
    <div class="number">{{ count }}</div>
    <!-- <v-btn class="mx-1" fab dark color="blue" @click="plus">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>

    <v-btn class="mx-1" fab dark color="orange" @click="minus">
      <v-icon dark> mdi-minus </v-icon>
    </v-btn> -->

    <counter-button kind="plus" color="blue" @click="plus" />
    <counter-button kind="minus" color="orange" @click="minus" />
  </div>
</template>

<script>
import CounterButton from '@/components/CounterButton.vue'

export default {
  components: {
    CounterButton,
  },
  data() {
    return {
      count: 100,
    }
  },
  methods: {
    plus() {
      this.count += 1
    },
    minus() {
      this.count -= 1
    },
  },
}
</script>

<style lang="scss">
.container {
  .number {
    font-size: 64px;
  }
}
</style>
