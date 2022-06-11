<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12">
        <h6 class="text-center">Activity</h6>
      </div>
    </div>
    <div class="row">
      <div v-for="(data, idx) in activity" :key="idx" class="col-12 q-mb-sm">
        <q-card class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-2">
                <q-icon size="2.5rem"  style="color: #00C31E; float: left;" name="schedule" />
              </div>
              <div class="col-10">
                <p class="q-my-none">{{ data.name }}</p>
                <p class="q-mb-none q-mt-md" style="color: green;">{{ data.status }}</p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
  <footer-menu style="margin-top: 200px;" />
</template>

<script>
import footerMenu from '../../components/footerMenu/footerMenu.vue'

export default {
  name: 'activityPage',
  components: {
    footerMenu
  },
  data () {
    return {
      activity: [
        {
          name: 'Donation to Panti Asuhan ABC',
          status: 'Delivery to Drop Off'
        },
        {
          name: 'Donation to Panti Asuhan BCA',
          status: 'Drivery to Merchant'
        }
      ]

    }
  }
  // methods: {
  //   goToActivityDetail () {
  //     this.$router.push('/activ')
  //   }
  // }
}
</script>
