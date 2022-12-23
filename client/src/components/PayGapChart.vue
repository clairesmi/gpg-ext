<script setup>
import { computed, defineProps } from "vue";
const props = defineProps({
  diffMedianPercent: Number,
  diffMeanPercent: Number,
  label: String,
  maleBonusPercent: Number,
  femaleBonusPercent: Number,
});
const base = 100;
const femaleMedianPercent = `${base - Math.round(props.diffMedianPercent)}`;

const formatMedian = computed(() => {
  return femaleMedianPercent < base
    ? `${femaleMedianPercent}p`
    : `£${femaleMedianPercent / 100}`;
});

const formatAvg = computed(() => {
  return props.diffMeanPercent < 0
    ? {
        value: Math.abs(props.diffMeanPercent),
        direction: "higher",
      }
    : {
        value: props.diffMeanPercent,
        direction: "lower",
      };
});
</script>

<template>
  <div>
    <h2 class="section-header">{{ label }} Pay Gap</h2>
    <p class="median-summary">
      In this company, women earn {{ formatMedian }} for every £1 that men earn
      when comparing median {{ label }} pay.
    </p>
    <div class="chart-container">
      <div class="female-median">
        <div class="bar">
          <span class="median-amount">{{ formatMedian }}</span>
        </div>
      </div>
      <div class="male-median">
        <div class="bar">
          <span class="median-amount">£1</span>
        </div>
      </div>
    </div>
    <p class="avg-summary">
      When comparing average {{ label }} pay, women’s {{ label }} pay is
      {{ formatAvg.value }}% {{ formatAvg.direction }} than men’s.
    </p>
    <p class="bonus-summary" v-if="label === 'bonus'">
      {{ femaleBonusPercent }}% of women received bonus pay
    </p>
    <p class="bonus-summary" v-if="label === 'bonus'">
      {{ maleBonusPercent }}% of men received bonus pay
    </p>
  </div>
</template>

<style scoped>
.chart-container {
  display: flex;
  height: 35%;
}

.section-header {
  margin: 5px 0 0 0;
  text-transform: capitalize;
}

.female-median,
.male-median {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
}

.female-median {
  align-items: flex-end;
  justify-content: flex-end;
}

.female-median .bar {
  position: relative;
  height: v-bind(femaleMedianPercent + "%");
  background-color: #f05d5e;
}

.male-median .bar {
  position: relative;
  height: v-bind((base / femaleMedianPercent) * base + "%");
  background-color: #828a95;
}

.female-median .bar .median-amount,
.male-median .bar .median-amount {
  position: absolute;
  top: -15px;
  text-align: center;
}

.bar {
  display: flex;
  justify-content: center;
  width: 20%;
  margin: 0 5px;
}

.bonus-summary {
  margin: 0;
}
</style>
