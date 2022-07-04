<template>
<div class="content-wrapper"><h1>Sme ľudia, ktorý pôsobili v rôznych oblastiach profesijného života</h1> dlhé roky sme pracovali s ľuďmi, či už
starostlivosťou o spolupracovníkov, manažmentom alebo prácou s deťmi. V rámci týchto našich
rôznych profesií sme začali chápať, že len strohé vykonávanie činností a logické sa dožadovanie
svojich požiadaviek nedosiahneme častokrát želaného výsledku a namiesto vytúženého šťastia
v živote sa dočkáme vyčerpanosti, depresie, či medziľudských konfliktov. Začali sme tak spájať
vedomosti a prax, ktorú máme s prácou s ľuďmi, s hlbším chápaním podstaty života (tak ako svojho,
tak aj druhých ľudí, s ktorými sme v kontakte). Každý človek v našom okolí a každá situácia, ktorú
riešime nám tak dáva unikátny nástroj na sebarozvoj a prácu na svojom vedomí. To čo sa snažíme
v rámci oz odovzdávať je len náš pohľad na cestu, ktorú sme s absolvovali a rozprávame o tom akým
spôsobom o našej životnej ceste práve kráčame.</div>
</template>
<script>
module.exports = {
    data: function () {
        return {
            who: 'O nás',
            expanded: false,
        };
    },
};
</script>
<style>
.tab-pane {
    background: transparent;
}
.nav-link{
    background-color: transparent;
    border:none;
}
[aria-selected="true"]{
    font-weight:bolder;
    
    
}
.navlink:focus{
   font-weight:bolder;
    
}
</style>
