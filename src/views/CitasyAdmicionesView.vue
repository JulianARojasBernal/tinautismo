<template>
  <div class="container">
    <div class="titulo">
      <h1>CITAS Y ADMISIONES</h1>
    </div>

    <br />
    <br />

    <div class="container text-center">
      <div class="row">
        <div class="col">
          <img alt="Vue logo" src="../assets/citas/registro.jpg" />
        </div>
        <div class="col">
          
          <form>
            <fieldset>
              <legend>FORMULARIO</legend>
              <div class="mb-3">
                <label for="axampleTextInput" class="form-label">NOMBRE COMPLETO</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Del Padre o tutor">
              </div>

              <div class="mb-3">
                <label for="enableTextInput" class="form-label">TELEFONO Y/O WHATSAPP</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Numero Teléfonico">
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">NOMBRE DEL PACIENTE</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Nombre completo del Niño">
              </div>

              <div class="mb-3">
                <label for="disabledTextInput" class="form-label">EDAD</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Edad del Niño">
              </div>

              <div class="mb-3">
                <legend>¿CUENTA CON FORMULARIO?</legend>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck">
                  <label class="form-check-label" for="disabledFieldsetCheck">
                    SI
                  </label>
                  <div class="form-check"></div>
                  <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck">
                  <label class="form-check-label" for="disabledFieldsetCheck">
                    NO
                  </label>

                </div>
              </div>
              <button type="submit" class="btn btn-primary">ENVIAR</button>
            </fieldset>
          </form>

        </div>
      </div>
    </div>

    <br />
    <br />

    <div class="titulo">
      <h1>CONOCE NUESTRO PROCESO DE ADMISIÓN</h1>
    </div>

    <br />

    <div class="container text-center">
      <div class="row">
        <div class="col">
          <p class="fs-5">
            Contacto con el área de evaluación y diagnóstico, para solicitar una cita de primera vez. <br>
            Contar con el informe psicopedagógico del área de evaluación y diagnostico. <br>
            Acreditación de término del taller PINSA (tres módulos de un mes cada uno). <br>
            Periodo de asignación de espacio de (6 meses a 1 año) propuesta de servicio TAD mientras se esta en espera (no obligatorio). <br>
            Integración al programa presencial según las habilidades e hitos alcanzados. <br>
          </p>
        </div>
        <div class="col">
          <img alt="Vue logo" src="../assets/citas/proceso.jpg" />
        </div>
      </div>
    </div>
  </div>

  <br />
  <br />
</template>
  