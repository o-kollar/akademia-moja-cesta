new Vue({
    el: '#wrapper',
    components: {
      'kurz-card': httpVueLoader('./components/kurz.vue'),
      'onas-component': httpVueLoader('./components/onas.vue'),
      'vizia-text': httpVueLoader('./components/vizia.vue'),
      'faq-section':httpVueLoader('./components/faq.vue'),
      'prednasky-card':httpVueLoader('./components/prednasky.vue'),
      'seminare-card':httpVueLoader('./components/seminare.vue'),
      'deti-card':httpVueLoader('./components/deti.vue')
    }
  });



  