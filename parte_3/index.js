const title_masc = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor",
    "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.",
    "General"
]
const title_fem = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal",
    "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.",
    "General"
]

const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic",
    "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega",
    "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden",
    "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"
]

const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger",
    "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame",
    "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon",
    "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night",
    "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino",
    "Mole", "Sloth"
]




function tusuperHeroe(genero) {


    let tuTituloM = title_masc[Math.floor(Math.random() * title_masc.length)];

    let tuTituloF = title_fem[Math.floor(Math.random() * title_fem.length)];

    let tuAdjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];

    let tuSustantivos = sustantivos[Math.floor(Math.random() * sustantivos.length)];

    switch (genero) {

        case 'hombre':
            document.write("tu super heroe es: " + tuTituloM +' '+tuAdjetivo+ ' '+tuSustantivos);
            break;

        case 'mujer':
            document.write("tu super heroe es: " + tuTituloF +' '+ tuAdjetivo+ ' '+tuSustantivos);
            break;

    }


} 

let generoUsuario = prompt("Introduce tu genero:");

tusuperHeroe(generoUsuario);

/////EXE 1/////
//Tu tarea va a consistir en crear una función que genere números al azar entre 1 y 10.
let numeros = [1,2,3,4,5,6,7,8,9,10];

function escoger1azar(numb){
    let tunumero = numeros[Math.floor(Math.random() * numeros.length)];
    return tunumero;
}
document.write(escoger1azar());

////////////2//////////

Ahora que has aprendido a crear números random entre 1 y 10 usando el
Math.random(), vas a hacer una función que genere números random entre 1 y X,
donde X será un argumento de tu función.


let uno = 1;

let x = [];

function buscarValorX(x){
   

    for(i=0; i <= x.length; i++){
        let 
        

        /*if ( x > 1){
            let Xs = x > 1;*/
           
        }

    }

}

buscarValorX(Xs)return x[Math.floor(Math.rannom()*x)]