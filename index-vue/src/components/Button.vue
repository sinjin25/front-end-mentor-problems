<template>
    <button @click="$emit('triggered')"><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
button {
    --primary: #394655;
    background: var(--primary);
    color: white;
    border-radius: 0.25em;
    box-shadow: inset 1px -2px 4px 0px #030405;
    padding: 0.25em 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .05em;
    &:hover {
        filter: brightness(1.2);
    }
}
</style>