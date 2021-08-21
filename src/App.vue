<template>
  <order-component v-for="order in orders" 
                  :key="order.Id"
                  :order="order" />
</template>

<script>
import orderComponent from "./components/orderComponent.vue";

export default {
  name: 'App',

  components: {
    orderComponent
  },

  computed: {
    orders() {
      return this.$store.state.orders;
    }
  },
}
</script>

