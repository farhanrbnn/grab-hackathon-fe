<template>
  <div class="q-pa-none">
    <div class="row">
      <div class="col-12">
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
  <q-form @submit="onSubmit()">
   <div class="q-pa-md">
      <div class="row">
        <div class="col-12">
          <h6 class="q-mb-lg q-mt-md">Choose Drop Off Point</h6>
        </div>
      </div>
      <div class="row"> 
        <div class="col-12">
          <q-input outlined color="green" v-model="address" label="Address">
            <template v-slot:prepend>
              <q-icon style="color: #FF3C3C;" name="place" />
            </template>
          </q-input>
        </div>
      </div>
      <div class="row q-mx-lg q-mb-lg fixed-bottom">
        <div class="col-12">
          <q-btn type="submit" style="background: #00C31E; color: white" class="full-width" label="Select Merchant" />
        </div>
      </div> 
    </div> 
    </q-form>
</template>

<script>
import axios from 'axios'
import { Cookies } from 'quasar'

export default {
  name: 'dropOff',
  data () {
    return {
      center: null, 
      position: null,
      address: null
    }
  },
  created () {
    // this.setUserGeo()
    this.getCookie()
  },
  methods: {
    getCookie () {
      this.position = Cookies.get('geolocation')
      this.center = Cookies.get('geolocation')
      this.address = Cookies.get('user_address')
      console.log(this.position)
    },
    getAddress () {
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.position.lat +','+ this.position.lng +'&key=AIzaSyAXeq6g3HL9uaX2X-kphWHhr-MghMf844A')
      .then((res) => {
        const address = res.data.results[0].formatted_address
        const split = address.split(",")
        this.address = split[0] + ',' + split[1]
      })
    },
    onSubmit () {
      console.log('testing')
      this.$router.push('/merchant')
    },
    async setUserGeo () {
      await navigator.geolocation.getCurrentPosition((position) => {
        this.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude, 
        }

        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude, 
        }
        this.getAddress()
      })
    }
  }
}
</script>
