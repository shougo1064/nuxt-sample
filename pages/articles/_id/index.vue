<template>
  <div>
    <div>記事詳細ページ</div>
    <div>
      <nuxt-link to="/articles/10/edit">Nuxt Link</nuxt-link>
    </div>
    <div>
      <a href="/articles/10/edit">a タグ</a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const foo = 'foo'
    console.log(foo)
  },
}
</script>
