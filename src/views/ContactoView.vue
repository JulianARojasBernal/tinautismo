<template>
  <div class="container">
    <h1>VISITANOS</h1>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59717.75416453591!2d-103.40679645538333!3d20.695615801617496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1beb17d4899%3A0x8826b286f6908aa1!2sTINA%20Autismo%20A.C.!5e0!3m2!1ses-419!2smx!4v1696393863266!5m2!1ses-419!2smx"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <br />
    <br />
  </div>

  <div class="container text-center">
    <div class="row">
      <div class="col">
        <form :action="mailtoUrl" method="get">
          <fieldset>
            <legend>FORMULARIO</legend>
            <div class="mb-3">
              <label for="axampleTextInput" class="form-label"
                >NOMBRE COMPLETO</label
              >
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Del Padre o tutor"
              />
            </div>

            <div class="mb-3">
              <label for="enableTextInput" class="form-label"
                >TELEFONO Y/O WHATSAPP</label
              >
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Numero Teléfonico"
              />
            </div>
            <div>
              <legend>AREAS DE APOYO</legend>
            </div>
            <select class="form-select" aria-label="Default select example">
              <option value="1">Voluntariado</option>
              <option value="2">Practicas Profesionales</option>
              <option value="3">Servicio Social</option>
              <option value="3">Otro</option>
            </select>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >COMENTARIO O MENSAJE</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <br />
            <br />
            <button type="submit" class="btn btn-primary">ENVIAR</button>
          </fieldset>
        </form>
        <br />
        <br />
        <P>
          Calzada Independencia Norte #1412 , Col.Independencia Oriente,
          Guadalajara, Jalisco. <br />
          Tel.: 33-3651-6953 <br />Lun a Vie 9am a 6 pm <br />
          contacto@tinautismo.com.mx <br />
          Envíanos un e-mai!</P
        >
      </div>

      <div class="col">
        <img alt="Vue logo" src="../assets/contactanos/contact.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nombreCompleto: "",
        telefono: "",
        areaDeApoyo: "Voluntariado",
        comentario: "",
      },
    };
  },
  computed: {
    mailtoUrl() {
      const { nombreCompleto, telefono, areaDeApoyo, comentario } = this.formData;
      const subject = 'Nuevo formulario de contacto';
      const body = `Nombre Completo: ${nombreCompleto}%0A` +
                   `Teléfono/WhatsApp: ${telefono}%0A` +
                   `Área de Apoyo: ${areaDeApoyo}%0A` +
                   `Comentario o Mensaje:%0A${comentario}`;

      return `mailto:admin@tinautismo.lat?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
  },
};
</script>
  