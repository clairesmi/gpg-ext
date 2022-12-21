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
  background-color: darkorange;
}
.colour-block.male {
  background-color: grey;
}

.key {
  display: flex;
  align-items: center;
}

.caption {
  margin: 10px 0;
}
</style>
