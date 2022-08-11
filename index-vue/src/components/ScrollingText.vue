<template>
    <div class="scrolling-text__container">
        <div class="scrolling-text"><slot></slot></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.scrolling-text {
    white-space: nowrap;
    transform: translateX(0%);
    animation: scroll linear 15s infinite;
    &__container {
        width: 100%;
        overflow: hidden;
        position: relative;
        &::after, &::before {
            --primary: rgba(255,255,255, 1);
            --primary-t: rgba(255,255,255, 0);
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            width: 2em;
            z-index: 2;
        }
        &::after {
            right: 0;
            background: linear-gradient(to left, var(--dark), var(--dark-t) 100%);
        }
        &::before {
            left: 0;
            background: linear-gradient(to right, var(--dark), var(--dark-t) 100%);
        }
    }
}
@media only screen and (min-width: 768px) {
    .scrolling-text {
        animation: unset;
    }
}
@keyframes scroll {
    0% {
        transform: translateX(100%);
    }
    80% {
        transform: translateX(-150%);
    }
    100% {
        transform: translateX(-150%);
    }
}
</style>