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
    <h2 class="header">The percentage of women in each pay quarter</h2>
    <p class="quartile-summary">
      In this organisation, women occupy
      {{ props.femaleLowerQuartile }}% of the highest paid jobs and
      {{ props.femaleTopQuartile }}% of the lowest paid jobs.
    </p>
    <div class="chart-container">
      <div v-for="(item, i) in payQuarters" :key="i" class="quartile">
        <div class="bar">
          <h3 class="quartile-labels">{{ item.label }}</h3>
          <div class="percentages-male">
            <div
              class="percentages-female"
              :style="{ width: item.female + '%' }"
            ></div>
          </div>
          <div class="labels">
            <p>{{ item.female + "%" }}</p>
            <p>{{ item.male + "%" }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  padding: 12px 0 0 0;
  border-top: solid lightgrey 1px;
}
.percentages-male {
  position: relative;
  width: 90%;
  height: 25px;
  margin: 20px 10 0 0;
  background-color: #828a95;
}

.percentages-female {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #f05d5e;
}

.labels {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 2px;
}

.quartile-labels {
  font-weight: 700;
}
</style>
