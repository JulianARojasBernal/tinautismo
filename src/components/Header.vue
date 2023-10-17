<template>
  <div class="haed">
    <img alt="Tina logo" src="@/assets/logo/log-tina.png" />
  </div>
</template>
  
  <script>
export default {
  name: "headerP",
  data: function () {
    return {
      usuarioActivo: false,
    };
  },
  methods: {
    activarUsuario: function () {
      this.usuarioActivo = true;
    },
  },
};
</script>
