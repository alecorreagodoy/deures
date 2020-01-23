/*Write a JavaScript function to check if a given positive number is a multiple of 3 or a
multiple of 7*/
var multiples_3=[];
var multiples_7=[];
document.write("Los multiplos de 3 son: ",multiples_3);
document.write("Los multiplos de 7 son: ",multiples_7);


function multiple(valor, multiple){
     resto = valor % multiple;
 if(resto==0){
        return true;
    }else{
        return false;
}

}


for(var i=1;i<=100;i++){
    if(multiple(i,3)){
        multiples_3.push(i);
     }
    if(multiple(i,7)){
        multiples_7.push(i);
 }
}