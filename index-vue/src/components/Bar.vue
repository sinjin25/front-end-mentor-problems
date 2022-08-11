<template>
    <div class="bar">
        <div class="bar-btn no-selection" @click="$emit('left')"><font-awesome-icon icon="fa-solid fa-angle-left" /></div>
        <ScrollingText v-if="title.length > 40"
        class="bar-title"><slot>{{title}}</slot></ScrollingText>
        <div v-else
        class="bar-title"
        >{{title}}</div>
        <div class="bar-btn no-selection" @click="$emit('right')"><font-awesome-icon icon="fa-solid fa-angle-right" /></div>
    </div>
</template>

<script>
import ScrollingText from './ScrollingText.vue'
export default {
    components: { ScrollingText },
    created() {
        console.log(this.$slots)
    },
    props: ['title']
}
</script>

<style lang="scss" scoped>
.bar {
    display: flex;
    background: var(--dark);
    color: white;
    box-shadow: 0 0 black;
    &-btn {
        font-size: 2rem;
        flex: 0 0 auto;
        width: 3rem;
        height: 3rem;
        padding: .5rem;
        text-align: center;
        background: rgba(0, 0, 0, .4);
        color: white;
        cursor: pointer;
    }
    &-title {
        flex: 1 auto;
        text-align: center;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding: 0 1em;
    }
}
</style>