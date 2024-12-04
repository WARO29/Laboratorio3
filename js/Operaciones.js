const boton = document.getElementById('btn');

boton.addEventListener('click', function(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let operacion = document.getElementById('Operaciones');
    const valorSeleccionado = operacion.value;

    switch (valorSeleccionado) {
        case "Suma":
            alert('La suma de los 2 numeros es:' + (num1 + num2));
          break; // Finaliza el caso
        case "Resta":
            alert('La resta de los 2 numeros es:' + (num1 - num2));
          break;
        case "Multiplica":
            alert('La multiplicacion de los 2 numeros es:' + (num1 * num2));
          break; // Finaliza el caso
        case "Divide":
            // Validación para evitar división por cero
            if (num2 === 0) {
                alert("Error: No se puede dividir entre cero");
            } else {
                alert("La división de los 2 números es: " + (num1 / num2));
            }
        
        break;
        
        default:
          // Código que se ejecuta si ningún caso coincide
          alert('Operacion no comtemplada.')
      }
    
})