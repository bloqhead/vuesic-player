<template>
  <div class="controls">
    <div class="controls__cluster">
      <a href="#" class="controls__item controls__item--prev">
        <i class="fas fa-step-backward" aria-hidden="true"></i>
        <span class="sr-only">Previous Song</span>
      </a>
      <a href="#" class="controls__item controls__item--play">
        <i class="fas fa-play" aria-hidden="true"></i>
        <span class="sr-only">Play or Pause</span>
      </a>
      <a href="#" class="controls__item controls__item--next">
        <i class="fas fa-step-forward" aria-hidden="true"></i>
        <span class="sr-only">Next Song</span>
      </a>
    </div>
    <div class="controls__track-info">
      <p class="controls__track-title">Hello World - Lorem ipsum dolor sit</p>
    </div>
    <div class="controls__scrubber">
      <span class="controls__timestamp controls__timestap--start">0:00</span>
      <input type="range" name="scrubber" id="scrubber">
      <span class="controls__timestamp controls__timestap--end">0:00</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
