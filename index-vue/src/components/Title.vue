<template>
    <div class="bg">
        <Name>Sinjin Lyon</Name>
        <div class="nudge">A small portfolio</div>
    </div>
</template>

<script>
import Name from './Name.vue'
export default {
  components: { Name },
}
</script>

<style lang="scss" scoped>
.bg {
    background: var(--dark);
    display: flex;
    align-items: flex-start;
    padding: 2.5rem 0;
    padding-left: 1.5em;
    flex-direction: column;
    color: white;
}
.nudge {
    margin-top: 1.5rem;
}
</style>