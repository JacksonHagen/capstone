<template>
  <Line
    :chart-data="chartData"
    :chart-options="chartOptions"
    :height="height"
  />
</template>


<script>
import { Line } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(Tooltip, LineElement, CategoryScale, LinearScale, PointElement)

export default {
  components: { Line },
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
      height: 100
    }
  }
}
</script>


<style lang="scss" scoped>
</style>