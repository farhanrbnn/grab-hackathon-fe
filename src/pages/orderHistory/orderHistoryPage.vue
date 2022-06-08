<template>
  <div class="q-pa-md">
    <div class="row">
      <router-link to="/home">
        <div class="col-12">
          <q-icon size="2.5rem"  style="color: #00C31E; float: left;" name="arrow_back_ios" />
          <h6 class="q-my-xs" style="color: #00C31E; float: left;">Back</h6>
        </div>
      </router-link> 
    </div> 
    <div class="row">
      <div class="col-12">
        <h6 class="text-center">Order History</h6>
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
export default {
  name: 'orderHistory',
  data () {
    return {
      data: ''
    }
  }
}
</script>
