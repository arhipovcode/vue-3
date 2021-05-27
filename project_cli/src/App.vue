<template>
    <Header></Header>
    <div class="news">
        <div class="container">
            <h2 class="news-title title">Актуальные новости {{ currentDate }}</h2>

            <div v-for="item in news" class="card" :key="item">
                <h3>{{ item }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header";
export default {
    components: {
        Header,
    },
    data() {
        return {
            currentDate: new Date().toLocaleDateString(),
            news: [
                'Первые новости',
                'Вторые новости'
            ]
        }
    }
}
</script>

<style lang="scss">
.news {
    padding: 20px 0;
    &-title {
        margin-bottom: 20px;
    }
}
.card {
    margin-bottom: 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
    color: #000044;
}
</style>
