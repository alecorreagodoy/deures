/////////////Ex3//////////

function numberarray(arraynumero){
 
    
   
        
    if( (arraynumero[0] === arraynumero[1]) || (arraynumero[1] === arraynumero[2])){


        if(arraynumero[1] === 4){
            return false
        }


        return true;

    }else{
        return false;
    }
    


}

let arraynumero = [1,4,2];

let position =  numberarray(arraynumero,);

document.write(position);