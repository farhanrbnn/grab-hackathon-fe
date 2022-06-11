<template>
      <q-card class="my-card" style="background: #00C31E; color: #fff">
        <q-card-section>
          <div class="row"> 
            <div class="col-12">
              <div class="row">
                <div class="col-2">
                  <q-icon size="2rem"  style="color: #fff; float: left;" name="shopping_basket" />
                </div>
                <div class="col-4 q-mt-xs "><b>5 item</b></div>
                <div class="col-6 q-mt-xs text-right"><b>Rp. 500.000</b></div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
</template>

<script>
export default {
  name: 'footerProductDisplay', 
  props: {
    localData: {
      type: Array 
    }
  },
  data () {
    return {
      dta: ''
    }
  },
  mounted () {
    console.log(this.localData)
  }
}
</script>
