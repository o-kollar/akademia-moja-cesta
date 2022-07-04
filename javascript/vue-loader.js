new Vue({
    el: '#wrapper',
    components: {
      'kurz-section': httpVueLoader('./components/kurz.vue'),
      'onas-component': httpVueLoader('./components/onas.vue'),
      'vizia-text': httpVueLoader('./components/vizia.vue'),
      'faq-section':httpVueLoader('./components/faq.vue')
    }
  });



  