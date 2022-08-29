<template>
  <v-card
    class="m-3"
    max-width="300"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    >
      <v-card-title>{{ objectCar.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ objectCar.price }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ objectCar.brand }}</div>

      <div>{{ objectCar.model }}, {{ objectCar.year }}</div>
    </v-card-text>

    <v-card-actions
    style="justify-content: end;"
    >
      <v-btn
        color="orange"
        text
        v-on:click=editCar
      >
        Editar
      </v-btn>
      
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
      props: {
          objectCar:Object
          },
      mounted() {
      },
      data() {
        return {
        }
      },
      methods:{
          editCar(){
          this.$emit('editCar')
        }
      },
        
    }
</script>