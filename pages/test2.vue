<template>
  <div>
    <div>テスト２</div>

    <v-text-field ref="number" v-model="number" />
    <div>数値: {{ number }}</div>

    <div :class="$style.container" v-for="user in users" :key="user.id">
      <div>名前: {{ user.name }}</div>
      <div>メールアドレス: {{ user.email }}</div>
      <div>電話番号: {{ user.phone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      users: [],
    }
  },

  async created() {
    try {
      const response = await this.$axios.get(
        'http://jsonplaceholder.typicode.com/users'
      )
      console.log(response)
    } catch (err) {
      const res = err.response
      console.log(res)
    }
    // console.log(response)
  },

  mounted() {
    console.log('mounted')
    this.$refs.number.focus()
  },

  updated() {
    console.log('updated')
    console.log(this.number)
  },
}
</script>

<style lang="scss" module>
.container {
  margin: 10px 0;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 4px;
}
</style>
