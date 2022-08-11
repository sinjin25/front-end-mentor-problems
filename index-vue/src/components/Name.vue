<template>
    <h2><slot></slot></h2>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
h2 {
    --primary: white;
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary);
    position: relative;
    display: inline-block;
    font-family: 'Lobster Two', cursive;
    letter-spacing: 0.15em;
    &::before {
        --primary: var(--accent-1);
        opacity: .5;
        --h: 5rem;
        content: "";
        position: absolute;
        right: 0;
        width: var(--h);
        height: var(--h);
        border-radius: 50%;
        background-color: var(--primary);
        z-index: -1;
    }
    &::after {
        content: "";
        position: absolute;
        bottom: -.75rem;
        left: 0;
        right: 0;
        width: 125%;
        height: .25em;
        background-color: var(--primary);
        z-index: 2;
    }
}
</style>