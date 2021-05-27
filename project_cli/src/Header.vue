<template>
  <div class="header">
      <div class="container">
          <h1 class="title">{{ title }}</h1>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Работа с компонентами VUE 3'
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    background-color: #319c76;
    padding: 30px 0;
}
</style>
