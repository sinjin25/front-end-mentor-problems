<template>
    <div class="img-container-c">
        <div class="img-container">
            <img :src="require('../assets/img/'+src)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: ['src']
}
</script>

<style lang="scss" scoped>
    .img-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        max-height: 500px;
        img {
            max-width: 100%;
            object-fit: cover;
        }
        /* fade */
        &::after, &::before {
            --bg: #151b22;
            --bg-t: hsla(212, 24%, 11%, 0);
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            height: 1rem;
            width: 100%;
            z-index: 2;
        }
        &::after {
            bottom: 0;
            background: linear-gradient(to top, var(--bg), var(--bg-t) 100%);
        }
        &::before {
            top: 0;
            background: linear-gradient(to bottom, var(--bg), var(--bg-t) 100%);
        }
    }
    .img-container-c {
        padding: 3rem;
        background: #151b22;
        position: relative;
        &:hover {
            &::after {
                display: flex;
            }
        }
        &::after {
            display: none;
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            content: "View Live HTML";
            z-index: 2;
            color: white;
            font-size: 3rem;
            background: rgba(0, 0, 0, .8);
        }
    }
</style>