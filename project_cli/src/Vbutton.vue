<template>
    <button class="btn"
            :class="nameClass"
            @click="$emit('action')">
<!--    slot подставляет нужный текст в родителе-->
        <slot/>
    </button>
</template>

<script>
export default {
    emits: ['action'],
    name: "Vbutton",
    props: {
        nameClass: {
            type: String,
            default: '',
            validator(value) {
                return ['', 'primary', 'danger', 'open'].includes(value)
            }
        }
    }
}
</script>
