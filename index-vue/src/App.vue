<template>
  <div>
    <Title class="top-shadow" />
    <Bar
    :title="activeProj.title"
    v-on:left="left()"
    v-on:right="right()"
    ></Bar>
    <View>
        <template v-slot:img>
            <ImgView class="top-shadow" :src="src" />
        </template>
        <template v-slot:desc>
            <ProjectDescription>
                <template #desc>
                    <h2>About the Project:</h2>
                    <p>{{activeProj.description}}</p>
                </template>
                <template #tech>
                    <h2>Techniques Applied:</h2>
                    <ul>
                        <li v-for="(item, index) in activeProj.tech" :key="index">{{item}}</li>
                    </ul>
                </template>
                <template #cta>
                    <Button class="btn">check it out</Button>
                </template>
            </ProjectDescription>
        </template>
    </View>
  </div>
</template>
<script>
import Bar from './components/Bar.vue'
import Button from './components/Button.vue'
import ImgView from './components/ImgView.vue'
import Name from './components/Name.vue'
import ProjectDescription from './components/ProjectDescription.vue'
import Title from './components/Title.vue'
import View from './components/View.vue'

import { projects } from './assets/projects'

export default {
  name: 'App',
  components: {
    Button,
    Name,
    Bar,
    ImgView,
    View,
    ProjectDescription,
    Title,
  },
  data() {
    return {
        projects: projects,
        index: 0,
    }
  },
  computed: {
    activeProj() {
        const p = this.projects[this.index]
        return p
    },
    src() {
        const p = this.activeProj
        return p.img[0]
    }
  },
  methods: {
    left() {
        if (this.index === 0) this.index = this.projects.length - 1
        else this.index--
    },
    right() {
        if (this.index === this.projects.length - 1) this.index = 0
        else this.index++
    },
  }
}
</script>

<style lang="scss">
.top-shadow {
    box-shadow: inset 0px 4px 5px 0px black;
}
.btn {
    margin: 0 auto;
}
</style>
