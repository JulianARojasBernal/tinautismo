<template>
  <div class="container">
    <div class="home">
      <img alt="Vue logo" src="../assets/ayudanos/voluntariado.jpg" />
    </div>

    <br />
    <br />

    <div class="titulo">
      <h1>CONSULTA LAS ÁREAS DONDE NOS PUEDES APOYAR</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Voluntariado.</h5>
              <p class="card-text">
                Consulta los voluntariados en los que nos puedes apoyar en T.I.N.A formando parte dentro de la organización social o administrativa ayudando a esta asociación que busca apoyar a los niños y adolescentes con TEA.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Prácticas profesionales.</h5>
              <p class="card-text">
                Realiza tu servicio en T.I.N.A. A.C consulta las áreas en las que puedes apoyar consulta las distintas áreas que tenemos disponibles para que apoyes de alguna forma con tu conocimiento en nuestras instalaciones.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Servicio social.</h5>
              <p class="card-text">
                Realiza tu servicio en T.I.N.A. A.C consulta las áreas en las que puedes apoyar consulta las distintas áreas que tenemos disponibles para que apoyes de alguna forma con tu conocimiento en nuestras instalaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />

    <div class="container text-center">
      <div class="row">
        <div class="col">
          <img alt="Vue logo" src="../assets/ayudanos/voluntarios.png" />
        </div>
        <div class="col">

          <form   action="https://formspree.io/f/xleyynon" method="POST">
            <fieldset >
              <legend>FORMULARIO</legend>
              <div class="mb-3">
                <label for="axampleTextInput" class="form-label">NOMBRE COMPLETO</label>
                <input name="Nombre" type="text" id="disabledTextInput" class="form-control" placeholder="Del Padre o tutor">
              </div>

              <div class="mb-3">
                <label for="enableTextInput" class="form-label">TELEFONO Y/O WHATSAPP</label>
                <input name="Telefono" type="text" id="disabledTextInput" class="form-control" placeholder="Numero Teléfonico">
              </div>
              <div> 
              <div class="mb-3">
                <label for="email" class="form-label">CORREO ELECTRONICO</label>
                <input name="Correo" type="email" id="email" class="form-control" placeholder="Correo Electrónico"/>
              </div>
              
                <legend>
                  AREAS DE APOYO
                </legend>
              </div>
              <select class="form-select" aria-label="Default select example">
                <option value="1">Voluntariado</option>
                <option value="2">Practicas Profesionales</option>
                <option value="3">Servicio Social</option>
                <option value="3">Otro</option>
              </select>
              <div class="mb-3">
  <label name="areas" for="exampleFormControlTextarea1" class="form-label">COMENTARIO O MENSAJE</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
              <br>
              <br>
              <button type="submit" class="btn btn-primary">ENVIAR</button>
              
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>

  <br />
  <br />
</template>

<script>
  const $form = document.querySelector('#form')

    async function handleSumbit(event){
    event.preventDefault() 
    const form = new FormData(this)
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    } )
    if (response.ok){
      this.reset()
      alert('Gracias por tu mensaje, te contactaremos a la brevedad')
    }
  }
</script>
  