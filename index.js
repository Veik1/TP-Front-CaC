document.addEventListener("DOMContentLoaded", function () {
  let seleccion;
  let monto;
  let pagoTotal;
  const precio = 200;

  const inputCategoria = document.getElementById("inputCategoria");
  const inputMonto = document.getElementById("inputMonto");
  const totalPagar = document.getElementById("total");
  const nombreDeUsuario = document.getElementById("nombre");
  const apellidoDeUsuario = document.getElementById("apellido");

  const calcularTotalPagar = () => {
    seleccion = inputCategoria.value;
    monto = parseInt(inputMonto.value);

    pagoTotal =
      seleccion === "estudiante"
        ? monto * precio * 0.2
        : seleccion === "trainee"
        ? monto * precio * 0.5
        : seleccion === "junior"
        ? monto * precio * 0.85
        : monto * precio;
  };

  const botonResumen = document.getElementById("botonResumen");
  botonResumen.addEventListener("click", (event) => {
    event.preventDefault();
    calcularTotalPagar();
    totalPagar.textContent = pagoTotal.toFixed(2);
  });

  inputCategoria.addEventListener("change", calcularTotalPagar);
  inputMonto.addEventListener("input", calcularTotalPagar);
});
