  //////////////exe9////////////

  let arrayNumeros = [2,1,4,5,3,7,5,9,0,2,0,5,8,6,7,8,9,5,6,4];

  function myNumeberFuntion(){
      let contador = 0; 
      for(let i = 0; i < arrayNumeros.length; i++){
          
          if(arrayNumeros[i] === 1 || arrayNumeros[i] === 3 ){
              contador++
          }
      }
      if( contador > 0){
          document.write("Si hay elementos 1 o 3")
      }else{
          document.write("No hay elementos 1 o 3")
      }
      

  }