<template>
<div class="accordion accordion-flush content-wrapper" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed content-wrapper " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Musím byť členom, aby som sa mohol zúčastniť?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body ">Odpoveď</div>
    </div>
  </div>
  <div class="accordion-item content-wrapper">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed content-wrapper" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Otázka 2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body content-wrapper">Odpoveď</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed content-wrapper" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Otázka 3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse content-wrapper " aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body content-wrapper">Odpoveď</div>
    </div>
  </div>
</div>
</template>
<script>
module.exports = {
    data: function () {
        return {

        };
    },
};

</script>
<style>

</style>
