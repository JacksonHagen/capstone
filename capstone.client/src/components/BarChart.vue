<template>
  <Bar :chart-data="chartData" :chart-options="chartOptions" :height="height" />
</template>


<script>
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, Legend, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { computed, onMounted } from '@vue/runtime-core';
import { AppState } from '../AppState.js';
import { habitsService } from '../services/HabitsService.js';

ChartJS.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: { Bar },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => { }
    },
  },
  setup() {
    return {
      height: 150
    }
  }
}
</script>


<style lang="scss" scoped>
</style>