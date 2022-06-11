<template>
  <div class="row q-px-sm q-py-md fixed-bottom shadow-2" style="background-color: #FFF;">
    <div class="col-12 q-mb-sm">
      <div class="row">
        <div class="col-6">
          <h6 class="q-my-md">Grand Total</h6>
        </div>
        <div class="col-6">
          <h6 class="q-my-md text-right"> Rp. {{ formatPrice(grandTotal) }} </h6>
        </div>
      </div>
    </div>
    <div class="col-12">
      <q-btn @click="removeLocalStorage()" style="background: #00C31E; color: white" class="full-width" label="Place Order" />
    </div>
  </div> 
</template>

<script>
export default {
  name: 'checkoutButton',
  props: {
    grandTotal: {
      type: Number
    }
  },
  data () {
    return {
      total: null  
    }
  },
  methods: {
    formatPrice (value) {
      const val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }, 
    removeLocalStorage () {
      localStorage.removeItem('cart')
      this.$router.push('/home')
    }
  }
}
</script>
