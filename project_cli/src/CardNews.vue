<template>
    <div class="card">
        <h3>{{ id }}. {{ title }}</h3>

        <Vbutton @action="open"
                :class="{open: isOpenNews}">
            {{ isOpenNews ? 'Закрыть' : 'Открыть' }}
        </Vbutton>
        <div v-if="isOpenNews">
            <p>{{ text }}</p>

            <Vbutton v-if="!wasRead"
                     @action="readNews"
                     name-class="primary">
                Прочесть
            </Vbutton>
        </div>
    </div>
</template>

<script>
import Vbutton from "./Vbutton";
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        id: {
            type: Number,
            default: 0
        },
        isOpen: {
            type: Boolean,
            default: false
        },
        wasRead: {
            type: Boolean,
            default: false
        },
    },
    emits: {
        'open-news': null,
        'read-news'(id) {
            if(id) {
                return true
            }
            console.warn('Нет параметра id для emit "read-news"')
            return false
        }
    },
    components: {
      Vbutton,
    },
    name: "CardNews",
    data() {
        return {
            isOpenNews: this.isOpen,
        }
    },
    methods: {
        open() {
            this.isOpenNews = !this.isOpenNews
            if(this.isOpenNews) {
                this.$emit('open-news')
            }
        },
        readNews() {
            this.isOpenNews = false
            this.$emit('read-news', this.id)
        }
    }
}
</script>

<style scoped lang="scss">
    h3 {
        margin-bottom: 20px;
    }
    .open {
        background-color: #f8ffc1;
        color: #1344bb;
        border: 1px solid #1344bb;
    }
    .hide {
        display: none;
    }
</style>
