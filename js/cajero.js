function calcularBilletes()
{
    const nombre = document.getElementById("nombre").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);



    
    const b100 = Math.floor(cantidad / 100);
    const b50 = Math.floor((cantidad % 100) / 50);
    const b20 = Math.floor(((cantidad % 100) % 50) / 20);
    const b10 = Math.floor((((cantidad % 100) % 50) % 20) / 10);
    const b5 = Math.floor(((((cantidad % 100) % 50) % 20) % 10) / 5);
    const b1 = (((cantidad % 100) % 50) % 20) % 10 % 5;

    
    
    document.getElementById("b100").innerHTML = `billetes de 100: ${b100}`;
    document.getElementById("b50").innerHTML = `billetes de 50: ${b50}`;
    document.getElementById("b20").innerHTML = `billetes de 20: ${b20}`;
    document.getElementById("b10").innerHTML = `billetes de 10: ${b10}`;
    document.getElementById("b5").innerHTML = `billetes de 5: ${b5}`;
    document.getElementById("b1").innerHTML = `billetes de 1: ${b1}`;


    if(isNaN(cantidad) || nombre == ""){
        alert("Por favor, ingresa un valor válido en ambos campos.");
        return;
    }
    
    let resultadoElement = document.getElementById("mostrar");
    resultadoElement.innerHTML = "Estimado " + nombre + " la cantidad a retirar es de: " + cantidad;
    resultadoElement.classList.add("mostrar");





    }