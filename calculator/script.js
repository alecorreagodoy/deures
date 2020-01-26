  let numero1 = 0;
  let operacion = "";

function imprime(valor) {
    document.querySelector(".calculator-screen").value += valor;
}

document.querySelector("#btn-1").addEventListener("click",function () {imprime("1");})
document.querySelector("#btn-2").addEventListener("click",function () { imprime("2");  })
document.querySelector("#btn-3").addEventListener("click",function () {imprime("3");})
document.querySelector("#btn-4").addEventListener("click",function () { imprime("4");  })
document.querySelector("#btn-5").addEventListener("click",function () {imprime("5");})
document.querySelector("#btn-6").addEventListener("click",function () { imprime("6");  })
document.querySelector("#btn-7").addEventListener("click",function () {imprime("7");})
document.querySelector("#btn-8").addEventListener("click",function () { imprime("8");  })
document.querySelector("#btn-9").addEventListener("click",function () {imprime("9");})
document.querySelector("#btn-0").addEventListener("click",function () { imprime("0");  })

document.querySelector("#btn-random").addEventListener("click", 

function () { 
    
    let nuemrosRandom = getNumberRandom();
    limpiar();

    imprime(nuemrosRandom);
    });


document.querySelector("#btn-ac").addEventListener("click",
function () {  
    limpiar();
     })

document.querySelector("#btn-eurodolar").addEventListener("click",
function () { 
    numero1 = parseInt(document.querySelector(".calculator-screen").value);

    let cambio = calculoeurodolar(numero1);
    limpiar();
    imprime(cambio.toFixed(2) + "€");
    })
document.querySelector("#btn-dolareuro").addEventListener("click",

function () { 
    numero1 = parseInt(document.querySelector(".calculator-screen").value);
    let cambio = calculoDolarEuro(numero1);
    limpiar();
    imprime(  cambio.toFixed(2) + "$");  
    });
  
  /////////Euro///////////

  let datosCambio = {euro:1,
                    dolar:1.11
                    };

  function calculoeurodolar(euro){

    let conversionrate = datosCambio.dolar;
    return euro * conversionrate;
}

///////Dolar////////////


let datosCambio2 = {dolar:1,
                    euro:0.91
    
                    };

                    
function calculoDolarEuro(dolar){

    let conversionrate = datosCambio2.euro;

    return dolar * conversionrate;

}

function limpiar(){
    document.querySelector(".calculator-screen").value = "";
}

  /////////////Random///////////////

  
 
function getNumberRandom(){
    let numeroMin = parseInt(prompt("Ingresa nuero mínimo para tu random:"));
    let numeroMax = parseInt(prompt("Ingresa nuero máximo para tu random:"));
    let datos = {
        rango1:numeroMin,
        rango2:numeroMax
        };
        let nuemrosRandom = Math.floor(Math.random()*(datos.rango2 - datos.rango1) + datos.rango1);
        
      
      return nuemrosRandom;

}
 