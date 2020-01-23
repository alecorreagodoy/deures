///////////////////exe 4/////////////////////

let datos =[
    {"numeroHijos":"3",
    "nombPartner":" pepita",
    "location":" Francia",
    "jobName":"Arquitecto"
    },
    {"numeroHijos":"2",
    "nombPartner":"Juan",
    "location":"Argentina",
    "jobName":"Programador"
    },
    {"numeroHijos":"0",
    "nombPartner":"Coca",
    "location":"Barcelona",
    "jobName":"Periodista"
    },
    {"numeroHijos":"4",
    "nombPartner":"Cola",
    "location":"Badaloma",
    "jobName":"panadero"
    },
    {"numeroHijos":"9",
    "nombPartner":"selma",
    "location":"Rio",
    "jobName":"abogada"
    }
    ]

function tellFortune(childs,partnerName,location,profesion){
    document.write(` <p> You will be a ${profesion} in ${location} and married to ${partnerName} with  ${childs} kids</p>`)


}
for(let i = 0; i < 3; i++){
    let nuevoObjetoDeDatos = datos[Math.floor(Math.random()*(datos.length))];
    tellFortune(nuevoObjetoDeDatos.numeroHijos,nuevoObjetoDeDatos.nombPartner,nuevoObjetoDeDatos.location,nuevoObjetoDeDatos.jobName);


    }