numero1 = 0;
numero2 = 0;
operacion = "";

function imprime(valor) {
    document.querySelector(".calculator-screen").value += valor;
}


   /* document.querySelector("#btn-eurodolar").addEventListener("click",
function () { 
    numero1 = parseInt(document.querySelector(".calculator-screen").value);

    let cambio = calculoeurodolar(numero1);
    limpiar();
    imprime(cambio.toFixed(2) + "€");
    })*/
document.querySelector("#btn-sumar").addEventListener("click", sumar)

function sumar() { 
    numero1 = getNumero();
    operacion = "+";

function getNumero() {
    return document.querySelector(".calculator-screen").value;


function resultado() {
        
        numero2 = parseInt(document.querySelector(".calculator-screen").value);
        result = 0;
        limpiar()
        
        if (operacion === "+") {
    
        }
        if (operacion === "-") {
    
        }
        if (operacion === "/") {
            
        }
        if (operacion === "*") {
            
        }
        if (operacion === "%") {
            
        }
        if (operacion === "x²") {
            
        }
        if (operacion === "√x") {
            //result = Math.sqrt(numero1); 
        }
        if (operacion === "€") {
            
        }
        if (operacion === "Rndm") {
            
        }
        imprime(result);
    
    }









document.querySelector("#btn-igual").addEventListener("click",
        function igual() { 
            
            let resultado = 0;
            let numero2 = getNumero();
            if (operacion == "+")
                resultado = sumar(numero1,numero2);
            imprime(resultado);  
        }
)