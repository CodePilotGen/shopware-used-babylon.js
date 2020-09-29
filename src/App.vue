<template>
  <div class="dmg-container">
    <Configurator  />
  </div>
</template>
<script>
  import Configurator from '@/frontend/Configurator.vue';
  export default {
    name: 'app',
    components: {
      Configurator,
    },
    data() {
      return {
        customer_id: '2',
        template_id: '449',
        rest_api_domain: 'http://127.0.0.1:8000',
        dmgShopBaseUrl: '',
      }
    },
    methods: {
    },
    mounted() {

    },
  };
</script>

<style scoped>
  .dmg-container {
    background-color: rgba(66,66,66,0.5);
  }
</style>
