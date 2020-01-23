
/*Crear una función que recibe un array de tres números y devuelve true si el primero
es igual al segundo o si el segundo es igual al tercero. Si el segundo número es 4,
siempre devuelve false.*/

/////////////Ex3//////////




function numberarray(arraynumero){
    let result =[]

  
   if( arraynumero[1] === 4){
        document.write("es falso");
        return result
      
   }else if(arraynumero[0] === arraynumero[1]||arraynumero[1] === arraynumero[2]){
        document.write("es true");
        return result
   }
 
}

let position =  numberarray([1,4,3]);







/*switch (arraynumero) {
    
    case 'uno':
   {} ;
        return true;
        break;
    case 'dos':
        
        return true;
        break;    
    case 'tres' :
       
        return false;
        break;

}*/



       


        

