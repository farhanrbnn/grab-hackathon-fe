<template>
  <div class="q-pa-md" style="height: 100vh;">
    <div class="row">
      <div class="col-12">
        <h4 class="text-center">Login</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-12 flex flex-center">
        <img
          alt="login" 
          src="~assets/login.svg"
          style="width: 200px; height: 200px"
        >
      </div>
    </div>
    <div class="row q-mt-lg">
      <div class="col-12"> 
        <q-input color="green" v-model="userData.phoneNumber" label="Phone Number">
          <template v-slot:prepend>
            <q-icon name="phone_iphone" />
          </template>
        </q-input>
      </div>
      <div class="col-12"> 
        <q-input color="green" v-model="userData.password" type="password" label="Password">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="row q-mx-lg q-mb-lg fixed-bottom">
      <div class="col-12">
        <q-btn style="background: #00C31E; color: white" @click="submitData()" class="full-width" label="Submit" />
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'loginsPage',
  data () {
    return {
      userData: {
        phoneNumber: '',
        password: ''
      }
    }
  },
  methods: {
    submitData () {
      const data = this.userData
      console.log(data)
    }
  }
}
</script>
