<template>
  <headerP/>
  <nav class="menu">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/conocenos">Conócenos</router-link> |
    <router-link to="/servicios">Servicios</router-link> |
    <router-link to="/citasyadmiciones">Citas y Admisiones</router-link> |
    <router-link to="/autismo">Autismo</router-link> |
    <router-link to="/ayudanos">Ayúdanos</router-link> |    
    <router-link to="/contacto">Contacto</router-link> |
    <router-link to="/tienda">Tienda</router-link>
  </nav>
  <router-view/>
  <footerP/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</template>

<script>
import headerP from './components/Header.vue';
import footerP from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    headerP,
    footerP
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
  background-color: rgb(127, 197, 255);
}

nav a {
  font-weight: bold;
  font-size: 2
  0px;
  color: #2c3e50;
  
}

nav a.router-link-exact-active {
  color: #2f00ff;
  font-size: 30px;
}
</style>
