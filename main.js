const prompt = require('prompt-sync')();


const nombre = String("Edson Esteban Garcia Cuesta");
let edad = Number(32);
let esEstudiante=Boolean(true);


console.log("-----------Ejercicio 2------------") 

let variableVacia = undefined;

let variableNull = null;

console.log(variableVacia);
console.log(variableNull);

console.log("-----------2. Ingreso de datos por teclado------------") 


let anoNacimiento =Number(prompt("Ingresa año de nacimiento: "));
let age= 2025-anoNacimiento;

console.log(`Usted debde tener alrededor de ${age} años`);

console.log("-----------2.2. Ingreso de datos por teclado------------") 

let number1=Number(prompt("Ingresa el primer número: "));
let number2=Number(prompt("Ingresa el segundo número: "));

let suma = number1 +number2;
console.log(`La suma de los número es ${suma}`);

console.log("-----------3. Condicional------------")

let age2 =Number(prompt("Ingresa tu edad: "));

if(age2 >= 18){
    console.log("Puedes entrar");
}
else{
    console.log("No puedes ingresar");
}


let numberConsola = Number(prompt("Digita un número: "));

if (numberConsola < 0){
    console.log("Es negativo");
}
else if(numberConsola > 0){
    console.log("Es positivo");
}
else{
    console.log("Es cero");
}

console.log(`-----------4. Bucle while------------
   Ejercicio 1: 
• Pide un número con prompt().
• Usa un while para contar desde 1 hasta ese número.
• Muestra cada número en consola.
 
    
    `)

let number3=Number(prompt("Ingresa un número: "));

let contador = 1;

while (contador <=number3 ){
    console.log(contador);
    contador++;
}


console.log(`-----------4. Bucle while------------
   Ejercicio 2:
• Pide una contraseña con prompt().
• Usa un while para seguir preguntando hasta que ingrese "1234".
• Cuando acierte, muestra "Contraseña correcta".
    `)

let passwordCliente=String(prompt("Ingresa la contraseña: "));

let password = "1234";

while (passwordCliente !== password ){
    console.log("Contraseña errada");
    passwordCliente=String(prompt("Ingresa la contraseña: "));
    
}
console.log("Contraseña correcta");


console.log(`-----------5. Bucle for------------
   Ejercicio 1:
• Usa un for para imprimir los números del 1 al 10 en consola.

    `)


for(i=1; i<=10; i++){

    console.log(i)

}



    console.log(`-----------5. Bucle for------------
   Ejercicio 2:

• Pide un número con prompt().
• Usa un for para mostrar la tabla de multiplicar de ese número (del 1 al 10).
    `)

let numberMulti = Number(prompt("Ingresa el número que quieres multiplicar: "))

for( i=1; i<=10; i++ ){
    multi=i*numberMulti
    console.log(`${i} X ${numberMulti} = ${multi}`)
}