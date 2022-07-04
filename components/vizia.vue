<template>
    <div id="content-wrapper">
        <h2>Víziou akadémia moja cesta je rozvoj jednotlivca v oblastiach, ktoré najviac ovplyvňujú kvalitu jeho života.</h2>
        <a v-if="expanded===false" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"  @click="expanded = !expanded">
         chcem zistit viac...
        </a>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                Berieme jednotlivca ako nedeliteľnú súčasť spoločnosti, ktorý svojim vedomím prispieva k celkovej prosperite spoločnosti a okoliu v ktorom žije.
                Vzchádzame z toho, že naše vedomie a pohľad na situácie, ktoré v živote zažívame má rozhodujúci vplyv na to akým smerom sa vyvíja náš život, aké
                udalosti prežívame a aký máme z prežitého času dojem. Na našich prednáškach, kurzoch a seminároch rozvíjame práve také vedomie, ktoré dáva do
                rúk človeka kontrolu nad svojím vlastným bytím a reakciami a nesnaží sa len tvrdohlavo a nasilu zmeniť vonkajší svet aby sa mu v ňom žilo
                lepšie. V každej hodine sa vraciame k základnému uvedomeniu, že aj pozorovateľ určitých udalostí či dejov v našej spoločnosti prispieva k ich
                tvoreniu. My vám dáme do ruky vedomé nástroje ako byť vedomými tvorcami v lepšej spoločnosti, v ktorej každý chceme žiť a nie len pod vplyvom
                ega či strachu reagovať na to čo sa nám v živote udeje. Vítame vás v spoločnosti ľudí, ktorý sa rozhodli nie len rozvíjať svoje schopnosti, ale
                aj vedomie, ktoré tieto schopnosti budú dennodenne využívať.
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            expanded:false
        };
    },
};
</script>
<style>
.text-box {
    background-color: rgb(219, 237, 240);
    border-radius: 20px;
    padding: 30px;
}
.card{border:none;
 background-color: rgb(219, 237, 240);}

#content-wrapper{
    background-color: rgb(219, 237, 240);
    border-radius: 20px;
    padding:10px;

}
</style>
