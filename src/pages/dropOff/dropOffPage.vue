<template>
  <div class="q-pa-none">
    <div class="row">
      <div class="col-12">
        <GMapMap
          style = 'height: 50vh'
          :center="center"
          :zoom="10"
          map-type-id="terrain"
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
          <h6 class="q-mt-none q-mt-md">Choose Drop Off Point</h6>
        </div>
      </div>
      <div class="row q-mx-lg q-mb-lg fixed-bottom">
        <div class="col-12">
          <q-btn to="/merchant" style="background: #00C31E; color: white" class="full-width" label="Select Merchant" />
        </div>
      </div> 
    </div> 
</template>

<script>
export default {
  name: 'dropOff',
  data () {
    return {
      center: {
        lat: 51.093048,
        lng: 6.84212
      },
      position: {
        lat:51.093048,
        lng: 6.84212 
      }
    }
  }
}
</script>
