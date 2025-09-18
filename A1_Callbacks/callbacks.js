// Función que genera la tabla de multiplicar usando un callback
function generarTabla(numero, callback) {
  for (let i = 1; i <= numero; i++) {
    callback(i, numero)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const inputNumero = document.getElementById('numero')
  const btnGenerar = document.getElementById('generar')
  const errorDiv = document.getElementById('error')
  const tablaUl = document.getElementById('tabla')

  btnGenerar.addEventListener('click', function () {
    errorDiv.textContent = ''
    tablaUl.innerHTML = ''

    const valor = inputNumero.value.trim()
    const numero = parseInt(valor, 10)

    if (!valor || isNaN(numero) || numero < 1) {
      errorDiv.textContent =
        'Por favor, ingresa un número válido mayor o igual a 1.'
      return
    }

    function mostrarResultado(i, n) {
      const li = document.createElement('li')
      li.textContent = `${i} × ${n} = ${i * n}`
      tablaUl.appendChild(li)
    }
    generarTabla(numero, mostrarResultado)
  })
})
