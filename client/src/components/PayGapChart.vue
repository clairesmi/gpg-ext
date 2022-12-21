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
    <span class="median-summary">
      In this company,
      <strong>women earn {{ formatMedian }} for every £1 that men earn</strong>
      when comparing median {{ label }} pay.
    </span>
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
    <div class="avg-summary">
      When comparing average {{ label }} pay, women’s {{ label }} pay is
      <strong>{{ formatAvg.value }}% {{ formatAvg.direction }}</strong> than
      men’s.
    </div>
    <div class="bonus-summary-female" v-if="label === 'bonus'">
      <strong>{{ femaleBonusPercent }}%</strong> of women received bonus pay
    </div>
    <div class="bonus-summary-male" v-if="label === 'bonus'">
      <strong>{{ maleBonusPercent }}%</strong> of men received bonus pay
    </div>
  </div>
</template>

<style scoped>
.chart-container {
  display: flex;
  height: 85%;
}

.section-header {
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
  height: v-bind(femaleMedianPercent + "%");
  background-color: darkorange;
}

.male-median .bar {
  height: v-bind((base / femaleMedianPercent) * base + "%");
  background-color: grey;
}

.female-median .bar .median-amount,
.male-median .bar .median-amount {
  text-align: center;
  margin: 5px;
}

.bar {
  display: flex;
  justify-content: center;
  width: 20%;
  margin: 0 5px;
}
</style>
