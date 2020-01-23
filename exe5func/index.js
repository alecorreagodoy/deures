 //////////////exe 5 /////////////

   let datosPerro = [{edadPerro:7,
                     edadHumano:1
                        },
                    {edadPerro:9,
                     edadHumano:2
                        },
                    {edadPerro:15,
                     edadHumano:3
                        }
        


                    ]

    function calculateDogAge(puppysAge,conversionRate){
        //let DogAge = 7;
       

        document.write(`<p>Your doggie is ${puppysAge*conversionRate} years old in dog
            years!</p>`);
        
     }

     for(i = 0; i < 3; i++ ){
        calculateDogAge(datosPerro[i].edadPerro,datosPerro[i].edadHumano)
     }