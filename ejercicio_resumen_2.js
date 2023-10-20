/* 
Las notas de María, Juan y Luis en los exámenes de evaluación son respectivamente:

María: 10, 3, 6, 7
Juan: 5, 6, 1, 4
Luís: 9, 1, 1, 8

- define un objeto para cada estudiante donde se vean reflejadas las notas
- crea un bloque if - else if en el que se devuelva si el estudante suspende (<5) aprueba (5 - 7) o tiene un notable (>= 8), tendras que hacer la media.
- testea el bloque con cada alumno

*/
let Maria;
let Juan;
let Luis;
/* let primera;
let segunda;
let tercera;
let cuarta; */

let notasEstudiantes = {
    Maria: {
        primera:10,
        segunda: 3,
        tercera: 6,
        cuarta: 7
    },
    Juan: {
        primera: 5,
        segunda: 6,
        tercera: 1,
        cuarta: 4
    },
    Luis: {
        primera: 9,
        segunda: 1,
        tercera: 1,
        cuarta: 8
    }
}

let evaluacionFinalMaria;
evaluacionFinalMaria = (notasEstudiantes.Maria.primera + notasEstudiantes.Maria.segunda + notasEstudiantes.Maria.tercera + notasEstudiantes.Maria.cuarta) /4;
if (evaluacionFinalMaria < 5){
    console.log('Maria','Suspenso');
} else if (evaluacionFinalMaria > 5 && evaluacionFinalMaria < 8){
    console.log('Maria','Aprobado');
} else if (evaluacionFinalMaria > 8){
    console.log('Maria','Notable');
}

let evaluacionFinalJuan;
evaluacionFinalJuan = (notasEstudiantes.Juan.primera + notasEstudiantes.Juan.segunda + notasEstudiantes.Juan.tercera + notasEstudiantes.Juan.cuarta) /4;
if (evaluacionFinalJuan < 5){
    console.log('Juan','Suspenso');
} else if (evaluacionFinalJuan > 5 && evaluacionFinalJuan < 8){
    console.log('Juan','Aprobado');
} else if (evaluacionFinalJuan > 8){
    console.log('Juan','Notable');
}

let evaluacionFinalLuis;
evaluacionFinalLuis = (notasEstudiantes.Luis.primera + notasEstudiantes.Luis.segunda + notasEstudiantes.Luis.tercera + notasEstudiantes.Luis.cuarta) /4;
if (evaluacionFinalLuis < 5){
    console.log('Luis','Suspenso');
} else if (evaluacionFinalLuis > 5 && evaluacionFinalLuis < 8){
    console.log('Luis','Aprobado');
} else if (evaluacionFinalLuis > 8){
    console.log('Luis','Notable');
}
