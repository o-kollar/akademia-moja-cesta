<template>
    <div class="accordion accordion-flush content-wrapper" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
                <button
                    class="accordion-button collapsed content-wrapper"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                >
                    Musím byť členom OZ, aby som sa mohol zúčastniť Vašich akcií?
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    Nie, pre účasť na našich akciách nemusíte byť členom nášho OZ. OZ bolo založené hlavne ako organizačná štruktúra v rámci, ktorej môžeme
                    vykonávať činnosti OZ. Samozrejme členovia OZ budú mať možnosť zúčastniť sa špeciálnych členských akcií, ktoré budú vyhradené len pre
                    členov, prípadne získajú zľavy zo vstupného na rôzne akcie OZ. Tým chceme ešte viac podporiť ľudí, ktorý sa aktívne venujú rozvoju svojho
                    vedomia a pracujú na svojom prístupe k životu každodenne a dlhodobo.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
                <button
                    class="accordion-button collapsed content-wrapper"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                >
                  Prečo by som si mal vybrať práve akcie vášho OZ?
                </button>
            </h2>
            <div
                id="flush-collapseThree"
                class="accordion-collapse collapse content-wrapper"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
            >
                <div class="accordion-body content-wrapper">Pretože ľudia, ktorý v rámci OZ pôsobia pracujú v prvom rade na sebe a svojom pochopení situácii,
ktoré v živote zažívajú a až následne po aplikovaní a pochopení daných súvislotí a zvládnutí ich
praktickej aplikácie sa rozhodli šíriť tieto skúsenosti a poznatky ďalej. Veci, ktoré sa na kurzoch
a prednáškach dozviete sú z ich osobnej praxe zo situácií a skúseností, ktoré reálne zažili a vyriešili ich
práve iným pohľadom a prístupom k danej situácií. Rozhodne je však na vás, či sa daných akcií chcete
zúčastniť, nakoľko niekomu vyhovuje striktne daná metóda na daných postupoch, ktoré niekto
vymyslel, no takto sa človek stáva možno len schopným, no nie vedomím a všetci vieme ako vyzerajú
situácie, keď ich riešia veľmi schopný a nadaný ľudia, ktorý neovplývajú vedomím jednoty
a spolutvorenia reality pre nás všetkých.</div>
            </div>
        </div>
                <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
                <button
                    class="accordion-button collapsed content-wrapper"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                >
                  Má význam si niektorú z Vašich akcii zopakovať, či zúčastniť sa jej opakovane?
                </button>
            </h2>
            <div
                id="flush-collapseFour"
                class="accordion-collapse collapse content-wrapper"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
            >
                <div class="accordion-body content-wrapper">Keďže sme všetci ľudia a naši lektori sa nesnažia pristupovať k výuke podľa presne stanovených
šablón, určite na každom ďalšom seminári či prednáške sa dozviete vždy niečo nové, pretože sa ho
zúčastnia iný účastníci a aj prednášajúci svoje vedomie v danej téme časom rozvinú aj v iných
oblastiach..</div>
            </div>
        </div>
           <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
                <button
                    class="accordion-button collapsed content-wrapper"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                >
                  Potrebujem prax alebo skúsenosť predtým než sa zúčastním vašich akcií?
                </button>
            </h2>
            <div
                id="flush-collapseFive"
                class="accordion-collapse collapse content-wrapper"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
            >
                <div class="accordion-body content-wrapper">Na účasť na našich akciách nie sú kladené žiadne výnimočne požiadavky na jednotlivého účastníka, aj
keď to čo požadujeme je možno pre niektorých, častokrát aj nadaných a inteligentných ľudí veľmi
náročné. Chceme len aby vedeli načúvať druhým, okoliu a samy sebe a prišli na našu akciu s pocitom,
že sa chcú dozvedieť niečo nové, získať iný pohľad a perspektívu na určité životné udalosti, ktoré
zažili.</div>
            </div>
            
        </div>
        
    </div>
</template>
<script>
module.exports = {
    data: function () {
        return {};
    },
};
</script>
<style>
.accordion{
    margin-bottom: 200px;
}
.accordion-button:not(.collapsed){
  font-weight: bold;
  color:black;
  background-color:white;
  padding: 10px;

}
.accordion-collapse{
  font-weight: normal;
   
}
.accordion-button{
}
</style>
