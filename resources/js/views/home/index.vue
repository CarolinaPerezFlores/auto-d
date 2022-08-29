<template>
  <div id="initId">
      <h1 style="text-align: center;">Auto D</h1>
      <h3 style="text-align: center;">Agrega tu carro</h3>
      <v-card
      width="600"
      class="mx-auto p-5">
        <v-form
          ref="form"
          v-model="valid"
          width="600"
        >
          <v-text-field
            v-model="nameInput"
            :counter="25"
            :rules="nameRules"
            label="Nombre"
            required
          ></v-text-field>

          <v-text-field
            v-model="priceInput"
            :rules="priceRules"
            label="Precio"
            type="number"
            :counter="25"
            required
          ></v-text-field>

          <v-select
            v-model="brandInput"
            :items="brands"
            :rules="[v => !!v || 'Item is required']"
            label="Marca"
            required
          ></v-select>

          <v-select
            v-model="modelInput"
            :items="models"
            :rules="[v => !!v || 'Item is required']"
            label="Modelo"
            required
          ></v-select>

          <v-select
            v-model="yearInput"
            :items="years"
            :rules="[v => !!v || 'Item is required']"
            label="Año"
            required
          ></v-select>
          <v-btn
            color="success"
            class="mr-4"
            @click="saveInfo"
          >
            Guardar
          </v-btn>

          <v-btn
            v-if="isEditing"
            color="error"
            class="mr-4"
            @click="deleteInfo"
          >
            Eliminar
          </v-btn>

          <v-btn
            v-if="isEditing"
            color="warning"
            @click="reset(), isEditing=false"
          >
           Cancelar
          </v-btn>
        </v-form>
      </v-card>
      <div
      id="allCars"
      height="auto"
      class="my-10"
      style=" display: flex;
        flex-wrap: wrap;
        justify-content: center;">
        <CardInfo 
        v-for="car in dataCar"
        v-bind:key="car.id"
        v-bind:objectCar="car"
        v-on:editCar="fillForm(car)"
        />
      </div>
  </div>
</template>

<script>
import axios from "axios";
import CardInfo from '../../components/CardInfo.vue';
import { nextTick } from 'vue'

export default {
  components: {
    CardInfo
  },
  data: () => ({
      valid: true,
      nameInput: '',
      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 25) || 'El nombre debe ser menor de 25 carácteres',
      ],
      priceInput: null,
      priceRules: [
        v => !!v || 'El precio es requerido',
      ],
      brandInput: null,
      modelInput: null,
      yearInput: null,
      cars: [],
      brands:[],
      models:[],
      years:[],
      loading: false,
      dataCar: [],
      isEditing: false,
      iddToEdit: null,
    }),
  mounted() {
    this.getBrands();
    this.getModelAndYear();
    this.getInfo();
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    getBrands () {
      this.loading = true;

      axios.get(
          `http://private-anon-655fb31478-carsapi1.apiary-mock.com/manufacturers`
        )
        .then((resp) => {
          let cars = resp.data;

          cars.forEach(element => {
            this.brands.push(element.name);
          });
  
        })
        .catch((err) => {
          console.error(err);
        });
    },

    getModelAndYear () {
        axios.get(
          `https://private-anon-655fb31478-carsapi1.apiary-mock.com/cars`
        )
        .then((resp) => {
          let cars = resp.data;

          cars.forEach(element => {
            this.models.push(element.model);
            this.years.push(element.year);
          });
  
        })
        .catch((err) => {
          console.error(err);
        });
    },

    saveInfo () {
      if (!this.validate()) {
            var data = {
              name: this.nameInput,
              price: this.priceInput,
              brand: this.brandInput,
              model: this.modelInput,
              year: this.yearInput,
          }
      

        let url = (this.isEditing) ? `/api/update-car/id/${this.iddToEdit}` : '/api/save-car';


        axios.post(url, data)
        .then((resp) => {
          this.reset();
          this.resetValidation();
          this.dataCar.splice(0, 0, resp.data.car);
          if(this.isEditing){
            location.reload();      
          }
          window.scrollTo({
          top: document.getElementById("allCars").offsetTop,
          left: 0,
          behavior: "smooth",
          });
          this.isEditing= false;
        })
        .catch((err) => {
          console.error(err);
        });
      }
    },

    deleteInfo () {
      axios.delete(
        `/api/delete-car/${this.iddToEdit}`
      )
      .then((resp) => {
        location.reload(); 
      })
      .catch((err) => {
        console.error(err);
      });
    },

    updateInfo () {
      axios.post(
        '/api/update-car'
      )
      .then((resp) => {


      })
      .catch((err) => {
        console.error(err);
      });
    },

    getInfo () {
      axios.get(
        '/api/list-cars'
      )
      .then((resp) => {
        this.dataCar = resp.data.cars;
      })
      .catch((err) => {
        console.error(err);
      });
    },

    fillForm (car) {
        if (car.id) {
          this.iddToEdit = car.id;
        }
        this.nameInput = car.name;
        this.priceInput = car.price;
        this.brandInput = car.brand;
        this.modelInput = car.model;
        this.yearInput = car.year;

      window.scrollTo({
        top: document.getElementById("initId").offsetTop,
        left: 0,
        behavior: "smooth",
      });

      this.isEditing= true;
    }
  },
  computed: {},
};
</script>

<style>
</style>