///////////////// exe 6, 7, 8, ////////////////

function calculateCelciursFahrenheit(GradosCelciurs){

    let fahrenheit = (GradosCelciurs*9/5)+32;
   
    document.write(`<p> tus grados Celcius a Fahrenheit °F :${fahrenheit} 
        </p>`);
    
}




function fahrenheitToCelsius(gradosFahrenheit){

    let celciurs = (gradosFahrenheit - 32) * 5 / 9 ;
   
    document.write(`<p> tus grados Fshrenheit a Celcius °C : ${celciurs} 
        </p>`);
    
    }




    function convertTemperature(numero,tipoDeGrados){
        
        

        if(tipoDeGrados === "celcius"){
            calculateCelciursFahrenheit(numero);
        }else{
            fahrenheitToCelsius(numero);
        }

    }