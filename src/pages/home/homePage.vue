<template>
  <div class="q-pa-md" style="height: 100vh;">
    <div class="row">
      <div class="col-12">
        <p class="text-left q-mt-xs">Hi, Farhan Rabbaanii</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h6 class="q-my-xs"> Your Location</h6>
        <div class="row q-mb-md">
          <div class="col-8 inline">
            <q-icon size="2rem"  style="color: #FF3C3C; float: left;" name="location_on" />
            <a href="#" class="q-my-xs" style="float: left; color: black;">Jalan Kemanggisan Raya</a>
          </div> 
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-12">
                <div class="row">
                  <div class="col-8 q-mb-md">
                    <p class="q-mb-none"> Sejak pakai Soombang, kamu sudah berderma sebanyak </p>
                    <h6 class="q-my-xs" style="color: #00C31E">Rp. 2.000.000</h6>
                  </div>
                  <div class="col-4"> 
                    <img
                    alt="money" 
                    src="~assets/money.svg"
                    style="width: 100%; height: 100%;"
                    >
                  </div>
                </div>
              </div>
              <div class="col-2">
                <a href="" style="color: #00C31E;">
                  Detail
                  <q-icon class="q-mt-xs" style="color: #00C31E; float: right;" name="chevron_right" />
                </a>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-8">
                <p class="q-mt-none">
                  <b>Saldo Anda</b>   
                </p>
                <img
                  alt="ovo" 
                  src="~assets/ovo.svg"
                  style="width: 40px; height: 40px; float: left;"
                >
                <h6 class="q-my-none q-ml-s" style="color: #00C31E; float: left;"> Rp. 500.000</h6>
              </div>
              <div class="col-4">
                <router-link to="/changeWallet">
                  <q-icon class="q-my-md" size="3rem" style="color: #00C31E; float: right;" name="apps" />
                </router-link>
              </div>
            </div>  
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-12">
        <q-btn style="background: #00C31E; color: white" icon="add_circle" size="lg" class="full-width" label="Donate Now" />
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-12">
        <h6 class="q-my-md">Last Transaction</h6>
      </div>
      <div v-for="(data, idx) in lastTransactions" :key="idx" class="col-12 q-mb-xs">
        <q-card class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-2">
                <q-icon size="2rem" style="color: #00C31E; float: left;" name="receipt_long" />
              </div>
              <div class="col-6">
                <p>{{ data.donateTo }}</p>
                <p class="q-mb-none">{{ data.date }}</p>
              </div>
              <div class="col-4">
                <p class="text-right">
                  <b> {{ data.total }} </b>
                </p>
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
  name: 'homePage',
  data () {
    return {
      lastTransactions: [
        {
          donateTo: 'donation to panti asuhan A',
          date: '25 Mei 2022',
          total: 'Rp. 250.000'
        },
        {
          donateTo: 'donation to panti asuhan B',
          date: '28 Mei 2022',
          total: 'Rp. 500.000'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
