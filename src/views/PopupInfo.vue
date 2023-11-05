<template>
    <div class="popup">
      <div class="popup-content">
        <h2>{{ servicio.titulo }}</h2>
        <p>{{ servicio.informacionComplementaria }}</p>
        <button @click="cerrarPopup">Cerrar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['servicio'],
    methods: {
      cerrarPopup() {
        this.$emit('cerrar-popup');
      }
    }
  }
  </script>
  
  <style scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* Asegura que la ventana emergente esté en la parte superior */
  }
  
  .popup-content {
    background: rgb(119, 162, 255);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    color: #fff;
    font-family: Helvetica, sans-serif;
    font-size: 1.5em;
  }
  </style>