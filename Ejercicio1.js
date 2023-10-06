// var a =10
// console.log(a)
// let b =8
// const c =2
// // console.log('a = ' +a )
// // console.log('b = ' +b )
// // console.log('c = ' +c )[]
// //Salidas a consola[]
// //console.log('a = ' +a )
// //console.log('b = ' +b )
// //console.log('c = ' +c )
// for(let i=0; i<5; i++){
//     console.log(b*i)
// }
// //let se usa en un entorno local para definir variable
// //que dejan de usarse fuerda de un bloque de codigo
// //console.log(b*i)
// // var  arreglo = ['Primero','Segundo','Tercero','Cuarto'];
// // for (let i=0; i< arreglo.length; i++){
// //     let leyenda= "El elemento" ;

// //     console.log(leyenda + arreglo[i]);
// // }


// var  arreglo = ['Primero','Segundo','Tercero','Cuarto'];
// function imprimir (arregloEnUso){
//     let numElementos = arreglo.length
//     for (let i=0; i< numElementos; i++){
//         let leyenda= "El elemento" ;
//         console.log(leyenda + arregloEnUso[i])
// }}


// imprimir(arreglo)
// var arreglo2= [];
// for(let i= 0; i<100; i++){
//    arreglo2[i]=i;
// }
// imprimir(arreglo2)

function imprimir5(){
var arreglo2 = [];
for(let i= 1; i<100; i++){
    arreglo2[i]=i
    if (arreglo2[i]%3===0){
        console.log("Soy un multiplo de 3");

    }else if(arreglo2[i]%7===0){
        console.log("Soy un multiplo de 7");
    }else{
        console.log(arreglo2[i]);
    }
}
}
imprimir5()






//var lista = [];
//for (let i=0; i<10; i++){
  //  lista.push(i);

//}
//for (let i= 0; i<10; i++){
//    console.log(lista[i])
//7}

//console.log("......")

//var lista = [];
//for (let i=0; i<10; i++){
//lista.unshift(i);
//}

//for(let i =0; i<10; i++){
//    console.log(lista[i]);
//}