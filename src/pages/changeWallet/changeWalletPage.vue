<template>
  <div class="q-pa-md" style="height: 100vh;">
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
        <h5 class="text-center">Change Wallet</h5>
      </div>
    </div>
    <div class="row">
      <div v-for="(data, idx) in bankList" :key="idx" class="col-12 q-mb-xs">
         <q-card class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-2">
                <img
                  :alt="data.bankName " 
                  :src="data.imagePath"
                  style="width: 40px; height: 40px; float: left;"
                >
              </div>
              <div class="col-10">
                <h5 class="q-my-none text-center">{{ data.bankName }}</h5>
              </div>
            </div> 
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'changeWallet',
  data () {
    return {
      data: '',
      bankList:[
        {
          bankName: 'OVO Cash',
          imagePath: require('../../assets/ovo.svg') 
        },
        {
          bankName: 'Bank BCA',
          imagePath: require('../../assets/bca.svg')
        },
        {
          bankName: 'Bank Mandiri',
          imagePath: require('../../assets/mandiri.svg')
        },
        {
          bankName: 'Bank BNI',
          imagePath: require('../../assets/bni.svg')
        },
        {
          bankName: 'Bank BRI',
          imagePath: require('../../assets/bri.svg')
        }
      ]
    }
  }
}
</script>
