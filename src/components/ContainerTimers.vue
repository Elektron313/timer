<template>
  <div class="container">
    <Timer
      v-for="timerId in timers"
      :key="timerId"
    />
    <div>
      <button class="add-timer" @click="addTimer">
        Добавить
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Timer from '@/components/TimerComponent.vue';

@Component({
  components: {
    Timer,
  },
})
export default class ContainerTimers extends Vue {
    timers: string[] = [
      '0',
      '1',
    ];

    addTimer() {
      this.timers.push(Math.random() + new Date().toLocaleString());
    }
}
</script>

<style lang="scss">

  .container{
    display: flex;
    flex-wrap: wrap;
    padding: 49.5px;
    justify-content: start;

    @media (min-width: 1024px) {
      width: 825px;
      > div {
        margin: 22.5px 25px
      }
    }
    @media (min-width: 320px) and (max-width: 767px){
      height: 100%;
      justify-content: center;
      > div {
        margin: 22.5px 45px;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px){
      width: 650px;
      > div {
        margin: 22.5px 45px;
      }
    }
  }
  .add-timer{
    background-color: #696969;
    width: 225px;
    height: 120px;
    padding: auto;
    outline: none;
  }

</style>
