<template>
  <div  :class="classes">
    <div class="time">
        <span>{{ convertCurrentTime(timerDate) }}</span>
    </div>
    <div class="actions">
      <button v-if="!isRunTimer" @click="runCurrentTimer">
        <img src="../assets/треугольник.svg" alt="">
      </button>
      <button  v-else @click="pauseCurrentTimer">
        <img src="../assets/Пауза.svg" alt="pause">
      </button>
      <button @click="resetTimer">
        <img src="../assets/квадрат.svg" alt="stop">
      </button>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import convertCurrentTime from '@/utils/helpers/convertCurrentTime';

@Component
export default class Timer extends Vue {
  timerDate = 0;

  isRunTimer = false;

  timerId = 0;

  get classes() {
    return ['timer', { timerActive: this.isRunTimer }];
  }

  beforeDestroy(): void {
    clearInterval(this.timerId);
  }

  convertCurrentTime = convertCurrentTime;

  handleTimer(value: boolean) {
    this.isRunTimer = value;
  }

  runCurrentTimer() {
    this.handleTimer(true);
    this.timerId = setInterval(() => {
      this.timerDate += 1;
    }, 1000);
  }

  pauseCurrentTimer() {
    clearInterval(this.timerId);
    this.handleTimer(false);
  }

  resetTimer() {
    clearInterval(this.timerId);
    this.handleTimer(false);
    this.timerDate = 0;
  }
}
</script>

<style lang="scss" >
  .timer{
    background-color: #696969;
    width: 225px;
    height: 120px;
    margin: 10px;
    display: flex;
    flex-direction: column;

    .time{
      flex: 1 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .actions {
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #9E9E9E;
      padding-top: 5px;
      flex: 1 0 auto;

      button {
        opacity: 0.5;
        border: none;
        background-color: inherit;
        margin: 5px;
        outline: none;
      }
    }
    &.timerActive {
      color: #FFFFFF;
      button {
        opacity: 1;
      }
      .actions {
        border-top: 1px solid #fff;
      }
    }
  }
</style>
