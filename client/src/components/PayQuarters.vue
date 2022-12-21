<script setup>
import { defineProps } from "vue";
const props = defineProps({
  femaleLowerQuartile: Number,
  maleLowerQuartile: Number,
  femaleLowerMiddleQuartile: Number,
  maleLowerMiddleQuartile: Number,
  femaleUpperMiddleQuartile: Number,
  maleUpperMiddleQuartile: Number,
  femaleTopQuartile: Number,
  maleTopQuartile: Number,
});
const payQuarters = [
  {
    label: "Upper hourly pay quarter (highest paid)",
    female: props.femaleTopQuartile,
    male: props.maleTopQuartile,
  },
  {
    label: "Upper middle hourly pay quarter",
    female: props.femaleUpperMiddleQuartile,
    male: props.maleUpperMiddleQuartile,
  },
  {
    label: "Lower middle hourly pay quarter",
    female: props.femaleLowerMiddleQuartile,
    male: props.maleLowerMiddleQuartile,
  },
  {
    label: "Lower hourly pay quarter (lowest paid)",
    female: props.femaleLowerQuartile,
    male: props.maleLowerQuartile,
  },
];
</script>

<template>
  <div>
    <h1 class="header">The percentage of women in each pay quarter</h1>
    <p>
      In this organisation, women occupy
      <strong>{{ props.femaleLowerQuartile }}%</strong> of the highest paid jobs
      and <strong>{{ props.femaleTopQuartile }}%</strong> of the lowest paid
      jobs.
    </p>
    <div class="chart-container">
      <div v-for="(item, i) in payQuarters" :key="i" class="quartile">
        <div class="bar">
          <h2 class="quartile-labels">{{ item.label }}</h2>
          <span class="percentages"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
