<template>
  <div>
    <h1>Lista de Productos</h1>
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
        <div class="card">
          <img :src="product.images[0].src" class="card-img-top" alt="Producto">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Precio: {{ product.price }}</p>
            <a :href="product.link" class="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      // URL de la REST API de WooCommerce
      const apiUrl = 'https://pruebastecnologicas.online/wp-json/wc/v3/';
      
      // Configura Axios con las credenciales de la API
      const api = axios.create({
        baseURL: apiUrl,
        auth: {
          username: 'ck_62bfa951615e53f86ad26831bba5a0158f68325e',
          password: 'cs_444ff9ef88a2d27b95f96c53a3a82f808dc44455',
        },
      });
      
      // Realiza una solicitud GET para obtener productos
      api.get('products')
        .then(response => {
          // Agregar el enlace al sitio de WooCommerce en cada producto
          this.products = response.data.map(product => ({
            ...product,
            link: product.permalink,
          }));
        })
        .catch(error => {
          console.error('Error al obtener productos:', error);
        });
    },
  },
};
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>

  