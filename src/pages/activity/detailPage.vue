<template>
  <div class="q-pa-none"> 
    <div class="row">
        <div class="row q-mb-md" style="position: absolute !important; top: 10px; left: 10px; z-index: 1;">
          <router-link to="/sourceFund">
            <div class="col-12">
              <q-icon size="3rem"  style="color: #00C31E; float: left;" name="arrow_circle_left" />
            </div>
          </router-link> 
        </div>
      <div class="col-12" style="position: relative;">
        <GMapMap
          style = 'height: 65vh'
          :center="center"
          :zoom="15"
          :options='{ fullscreenControl: false, mapTypeControl: false }' 
          > 
           <GMapCluster :zoomOnClick="true">
              <GMapMarker
                :position="position"
                :clickable="true"
                :draggable="true"
          />
        </GMapCluster>
        </GMapMap>
      </div>
    </div> 
  </div>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12">
        <h6 class="text-center q-my-sm" style="color: #00C31E;">Driver On The Way to Merchant</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h6 class="q-mt-md q-mb-sm">Merchant</h6>
      </div>
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-2">
                <q-icon size="2rem"  style="color: #00C31E; float: left;" name="restaurant" />
              </div>
              <div class="col-10">
                <p>Burger Bener</p>
                <p class="q-mb-none q-mt-md">Jl. Kemanggisan</p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h6 class="q-mt-md q-mb-sm">Drop Off Location</h6>
      </div>
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-2">
                <q-icon size="2rem"  style="color: #FF3C3C; float: left;" name="location_on" />
              </div>
              <div class="col-10">
                <p class="q-mb-none q-mt-xs">Jalan Kemanggisan Raya</p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h6 class="q-mt-md q-mb-sm">Order Summary</h6>
      </div>
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-2">
                <p class="q-my-none">10 x</p>
              </div>
              <div class="col-6">
                <p class="q-my-none">Burger 1</p>
              </div>
              <div class="col-4">
                <p class="q-my-none text-right">Rp. Rp. 50.000</p>
              </div>
            </div>
            <div class="row q-mt-xl">
              <div class="col-6">
                <p class="q-my-none">Delivery Fee</p>
              </div>
              <div class="col-6">
                <p class="q-my-none text-right">Rp. 10.000</p>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <p class="q-my-none">Admin Fee</p>
              </div>
              <div class="col-6">
                <p class="q-my-none text-right">Rp. 5.000</p>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <p class="q-mb-none q-mt-md">
                  <b>Grand Total</b>
                </p>
              </div>
              <div class="col-6">
                <p class="q-mb-none q-mt-md text-right">
                  <b>Rp. 65.000</b>
                </p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h6 class="q-mt-md q-mb-sm">Driver</h6>
      </div>
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-2">
                <q-icon size="2rem"  style="color: #00C31E; float: left;" name="face" />
              </div>
              <div class="col-10">
                <p>Ahmad Supratman</p>
                <p class="q-mb-none">B 123 ABC</p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-12"> 
        <q-btn style="background: #FF3C3C; color: white"  class="full-width" label="Cancel Order" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'detailPage'
}
</script>
