
////////////Ex 2/////////////



function arrayS(arrayString,palabra){
    let posicion = -1;
    
    for(let i = 0; i < arrayString.length ; i++){
        let strinOrder = arrayString[i];
        if(palabra == strinOrder){
            posicion = i
            
        }
       
    }
    return posicion;
}
let arrayString = ["Hola","como", 'coche',"estas?"];
let posicion =  arrayS(arrayString,"estas?")

document.write(posicion);