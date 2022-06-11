<template>
  <div class="q-pa-md" style="height: 100vh;">
    <div class="row q-mt-xl">
      <div class="col-12 text-center">
          <q-icon size="5rem" class="text-center"  style="color: #00C31E;" name="account_circle" />
          <p class="q-mt-md">Farhan Rabbaanii</p>
      </div>
    </div>
    <q-form>
      <div class="row">
        <div class="col-12 q-mb-md">
          <p class="q-mb-none"><b>Email</b></p>
          <q-input v-model="text" label="Standard" />
        </div>
        <div class="col-12 q-mb-md">
          <p class="q-mb-none"><b>Phone Number</b></p>
          <q-input v-model="text" label="Standard" />
        </div>
      </div>
    </q-form>
    <div class="row">
      <div class="col-12">
        <h6 class="text-center" style="color: #FF5252;">Log Out</h6>
      </div>
    </div>
    <footer-menu />
  </div>
</template>

<script>
import footerMenu from '../../components/footerMenu/footerMenu.vue'

export default {
  name: 'accountPage',
  components: {
    footerMenu
  }
}
</script>
