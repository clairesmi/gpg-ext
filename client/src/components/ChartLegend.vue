<template>
  <div class="legend-wrapper">
    <div class="key">
      <div class="colour-block female"></div>
      <p class="caption">Women</p>
    </div>
    <div class="key">
      <div class="colour-block male"></div>
      <p class="caption">Men</p>
    </div>
  </div>
</template>
<style>
.legend-wrapper {
  display: flex;
}
.colour-block {
  width: 20px;
  height: 20px;
  margin: 5px;
}

.colour-block.female {
  background-color: #f05d5e;
}
.colour-block.male {
  background-color: #828a95;
}

.key {
  display: flex;
  margin-left: 5px;
}

.caption {
  font-size: 12px;
}
</style>
