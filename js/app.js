/*let numero = 2
let num = 1

console.log(numero + num)*/

/*let numero1 = "5"
let num2 = 10

console.log(parseInt(numero1) + num2)*/


/*let numero1 ="5"
let num2 = 10

alert(parseInt(numero1) + num2)*/

/*let moneda ="pesos"
let comida ="guiso"

alert(`con ${10 + 5} ${moneda} me hago alto ${comida}`)*/

/*let saludo = "Hola"
let nombre = prompt(`ingrese su nombre`)
let apellido = prompt(`ingrese su apellido`)
let estado = ", que tengas un buen día"

alert(saludo + nombre + apellido + estado)*/

/*let edad = prompt(`ingrese su edad`)
let respuesta = 18

if(edad < respuesta){
    alert("sos menor de edad")
}else if(edad >= respuesta){
    alert("sos mayor de edad")
}*/

/*let argentina = prompt(`ingrese puesto de la selección Argentina`)
let respuesta = "primero"

if(argentina == respuesta){
    alert("entonces brasil segundo")
}else{
    alert("te equivocas, es argentina primero y brasil segundo")
}*/

//Ciclos/iteraciones

/*for (let i=0; i < 10; i++){
    alert(i);
}*/

/*for(let i= 1; i<=10; i++){
    alert(i);
}*/

/*const numero = prompt('ingrese un numero')

for(let i = 0; i<=10; i++){
    console.log(`${numero} x ${i} = ${numero*i}`)
}*/

/*for (let i=1; i<=20; i++){
    let nombre = prompt('ingrese su nombre')
    if(i==6)
    break;
    console.log("Turno N°" +i+" Nombre: "+ nombre)
}*/

/*for (let i=1; i<=20; i++){
    let nombre = prompt('ingrese su nombre')
    console.log("Turno N°" +i+" Nombre: "+ nombre)
    if(i==6)
    break;
}*/

/*for (let i=1; i<=20; i++){
    let nombre = prompt('ingrese su nombre')
    if(i==6){
        continue;
    }
    console.log("Turno N°" +i+" Nombre: "+ nombre)
}*/

/*const numero = prompt('ingrese un numero')

for(let i=0; i<=20; i++){
    while(i<=15){
        console.log(`${numero} x ${i} = ${numero*i}`);
        i++;
    }
}*/

/*let i = prompt('Ingrese dato');

while(i!="ESC"){
    alert(`el usuario ingreso ${i}`)
    i=prompt('Ingrese otro dato')
}*/

/*do{
//No funciona
    let nombre = prompt('Ingrese un nombre')

    alert(`el usuario ingreso ${nombre}`)
}while(nombre!= "Ariel")*/

/*let nombre = prompt('Ingrese su nombre')

while(nombre!="Ariel"){
    switch(nombre){
        case "Ariel":
            alert("Hola Ariel")
            break;
        case "Bruno":
            alert("Me suena pero no...")
            break;
        default:
            alert("Aca no te conoce nadie")
            break        
    }
    nombre = prompt('Ingrese su nombre')
}*/

/*let numero1 = Number(prompt('Ingrese valor de producto'));
let numero2 = Number(prompt('Ingrese IVA'))

function valor(valorDeProducto, iva){
    let suma = 1 + (iva/100)

    let resultado = valorDeProducto * suma;
    
    return resultado;
}

console.log(valor(numero1, numero2))
 */   

let pedro = Number(prompt('Cuanta plata tenes Pedro?'))
let juan = Number(prompt('Cuanta plata tenes Juan?'))
let luis = Number(prompt('Cuanta plata tenes Luis?'))

function helado(pedro, juan, luis){
    if(pedro >=20){
        alert("Te alcanza para 1/4kg Pedro")
    }else{
        alert("No llegas flaco, fijate si te gusta un conito")
    }
    if(juan >=30){
        alert("Te alcanza para 1/2kg Juan")
    }else{
        alert("Te alcanza para 1/4kg juancito")
    }
    if(luis >=40){
        alert("Te alcanza para 1kg Luis")
    }else{
        alert("Te alcanza para 1/2kg Luis")
    }
}

helado(pedro, juan, luis)
