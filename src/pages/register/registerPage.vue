<template>
  <div class="q-pa-md" style="height: 100vh;">
    <div class="row">
      <div class="col-12">
        <h4 class="text-center">Start to spread kindness</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-12 flex flex-center">
        <img
          alt="register" 
          src="~assets/register.svg"
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
        <q-input color="green" v-model="userData.fullName" label="Full Name">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
      </div>
      <div class="col-12">
        <q-input color="green" type="password" v-model="userData.password" label="Password">
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
  name: 'registerPage',
  data () {
    return {
      userData: {
        fullName: '',
        password: '',
        fullName: ''
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
