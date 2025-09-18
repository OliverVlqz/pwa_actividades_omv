// Función que genera la tabla de multiplicar usando un callback
function generarTabla(numero, callback) {
  for (let i = 1; i <= numero; i++) {
    callback(i, numero)
  }
}

// Referencias a elementos del DOM
document.addEventListener('DOMContentLoaded', function () {
  const inputNumero = document.getElementById('numero')
  const btnGenerar = document.getElementById('generar')
  const errorDiv = document.getElementById('error')
  const tablaUl = document.getElementById('tabla')

  // Evento click del botón
  btnGenerar.addEventListener('click', function () {
    // Limpiar mensajes y tabla
    errorDiv.textContent = ''
    tablaUl.innerHTML = ''

    const valor = inputNumero.value.trim()
    const numero = parseInt(valor, 10)

    // Validación del input
    if (!valor || isNaN(numero) || numero < 1) {
      errorDiv.textContent =
        'Por favor, ingresa un número válido mayor o igual a 1.'
      return
    }

    // Usamos la función con callback para mostrar la tabla
    generarTabla(numero, function (i, n) {
      const li = document.createElement('li')
      li.textContent = `${i} × ${n} = ${i * n}`
      tablaUl.appendChild(li)
    })
  })
})
