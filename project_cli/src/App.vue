<template>
    <TheHeader></TheHeader>
    <div class="news">
        <div class="container">
            <h2 class="news-title title">Актуальные новости {{ currentDate }}</h2>

            <span class="open-news">Открыли новость: <strong>{{ countOpened }}</strong> | Прочитали: <strong>{{ readNewsCount }}</strong></span>

<!--    Компонент CardNews - выводит карточку с новостями-->
<!--    Цикл v-for для перебора по массиву news-->
<!--    key - индивидуальный ключ каждому перебираемому "item"-->
<!--    title, id, text, is-open, was-read - пропсы (принимаемые параметры)-->
<!--    open-news, read-news - emits пользовательские события-->
            <CardNews
                v-for="item in news"
                :key="item.id"
                :title="item.title"
                :id="item.id"
                :text="item.text"
                :is-open="item.isOpen"
                :was-read="item.wasRead"
                @open-news="countOpened++"
                @read-news="getReadNews">
            </CardNews>

        </div>
    </div>
</template>

<script>
import TheHeader from "./TheHeader";
import CardNews from "./CardNews";
export default {
    components: {
        CardNews,
        TheHeader,
    },
    data() {
        return {
            currentDate: new Date().toLocaleDateString(),
            countOpened: 0,
            readNewsCount: 0,
            news: [
                {
                    id: 1,
                    title: 'Первые новости',
                    text: 'Текст для первой новости',
                    isOpen: false,
                    wasRead: false
                },
                {
                    id: 2,
                    title: 'Вторые новости',
                    text: 'А здесь будет другой текст',
                    isOpen: false,
                    wasRead: false
                },
                {
                    id: 3,
                    title: 'Третьи новости',
                    text: 'Здесь будет ваш текст, придумайте сами',
                    isOpen: false,
                    wasRead: false
                }
            ]
        }
    },
    methods: {
        getReadNews(id) {
            this.readNewsCount++
            const idx = this.news.find(item => item.id === id)
            idx.wasRead = true
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
.open-news {
    margin-bottom: 20px;
    display: inline-block;
}
</style>
