<template>
  <Doughnut :chart-data="chartData" :chart-options="chartOptions" />
</template>


<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, ArcElement)
export default {
  components: { Doughnut },
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
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>