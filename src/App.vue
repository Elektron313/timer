<template>
  <div id="app">
    <ContainerTimers />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import ContainerTimers from '@/components/ContainerTimers.vue';

@Component({
  components: {
    ContainerTimers,
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}
  html, body, #app {
    width: 100%;
    height: 100%;
  }
</style>
