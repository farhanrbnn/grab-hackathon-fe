<template>
  <div class="q-pa-none">
    <div class="row">
      <div class="col">
        <img
          alt="ovo" 
          src="~assets/burgerBener.jpeg"
          style="max-width: 100%"
        >
      </div>    
    </div>
  </div>
  <div class="q-pt-none q-px-md">
    <div class="row">
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section>
            <div class="row">
              <div class="col-12">
                <h6 class="q-my-xs text-center">Burger Bener</h6>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h6 class="q-my-md"> 
          Product List
        </h6>
      </div>
    </div>
    <div class="row justify-center q-gutter-xs">
      <q-intersection
        v-for="data in listProduct"
        :key="data.productId"
        class="example-item"
      >
        <q-card class="q-ma-sm">
          <img :src="data.images" style="width: 10rem;">
          <q-card-section>
            <div class="text-h6">{{ data.name }}</div>
            <p>{{ data.description }}</p>
            <h6 class="q-my-xs">Rp. {{ data.price }}</h6>
            <div class="row q-mt-md">
              <div class="col-2">
                <q-icon size="2rem" @click="removeProduct(data.productId)"  style="color: #00C31E;" name="remove" />
              </div>
              <div class="col-8">
                <h6 class="q-my-none text-center">0</h6>
              </div>
              <div class="col-2">
                <q-icon size="2rem" @click="addProduct(data.productId, data.price)"  style="color: #00C31E;" name="add" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script>
export default {
  name: 'merchantProductPage',
  data () {
    return {
     listProduct: [
       {
         productId: 1,
         name: 'Burger 1',
         description: 'lorem ipsum',
         price: 50000,
         images: require('../../assets/burger.jpeg') 
       },
       {
         productId: 2,
         name: 'Burger 2',
         description: 'lorem ipsum',
         price: 20000,
         images: require('../../assets/burger.jpeg') 
       },
       {
         productId: 3,
         name: 'Burger 2',
         description: 'lorem ipsum',
         price: 20000,
         images: require('../../assets/burger.jpeg') 
       },
       {
         productId: 4,
         name: 'Burger 2',
         description: 'lorem ipsum',
         price: 20000,
         images: require('../../assets/burger.jpeg') 
       }
     ],
     cart: []
    }
  },
  methods: { 
    addProduct (productId, productPrice) {
      const localData = localStorage.getItem('cart')
      const parsedData = JSON.parse(localData)

      if (localData === null) {
        const data = [{
          productId: productId,
          quantity: 1,
          productPrice: productPrice
        }]

        const stringifyData = JSON.stringify(data)
        localStorage.setItem('cart', stringifyData)

      } else {
        const isAvailable = parsedData.filter(d => d.productId === productId)

        if (isAvailable.length != 0) { 
          isAvailable[0].quantity = isAvailable[0].quantity + 1

          const stringifyData = JSON.stringify(parsedData)

          localStorage.setItem('cart', stringifyData)

        } else {
          const newProduct = {
            productId: productId,
            quantity: 1,
            productPrice: productPrice
          }

          parsedData.push(newProduct)

          console.log(parsedData)
          const stringifyData = JSON.stringify(parsedData)

          localStorage.setItem('cart', stringifyData)

        }
      }
    },
    removeProduct (productId) {
      console.log(productId)
    }
  }
}
</script>

<style scoped>
.example-item {
  height: '1em';
  width: '1em';
}
</style>