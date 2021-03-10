
function mostrar()
{
  let nombre;
    let edad;
    let sexo;
    let puesto;
    let sueldo;
    let acumuladorProg = 0;
    let acumuladorAnali = 0;
    let acumuladorQa = 0;
    let contadorProg = 0;
    let contadorProgNo = 0;
    let contadorAnali = 0;
    let contadorQa = 0;
    let contadorFemMayor = 0;
    let promePro = 0;
    let promeAna = 0;
    let promeQa = 0;
    let sexoMayor;
    let sexoSueldo;
    let femMayorSueldo;
    let femNombre;
    let flagSexo = 0;
    let flagFem = 0;
  
    let seguir;
  
    do {
      nombre = prompt("Ingrese su nombre");
  
      edad = parseInt(prompt("Ingrese su edad"));
      while (edad <= 0 || isNaN(edad)) {
        edad = parseInt(prompt("Error. Ingrese su edad"));
      }
      sexo = prompt("Ingrese su sexo: masculino, femenino, no binario").toLowerCase();
      while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario") {
        sexo = prompt("Error. Ingrese su sexo: masculino, femenino, no binario").toLowerCase();
      }
      puesto = prompt("Ingrese su puesto: programador, analista, Qa").toLowerCase();
      while (puesto != "programador" && puesto != "analista" && puesto != "qa"){
        puesto = prompt("Error. Ingrese su puesto: programador, analista, Qa").toLowerCase();
      }
      sueldo = parseInt(prompt("Ingrese su sueldo: Entre 15000 y 70000"));
      while (sueldo < 15000 || sueldo > 70000) {
        sueldo = parseInt(prompt("Error. Ingrese su sueldo: Entre 15000 y 70000"));
      }
      
      if(puesto == "programador"){
        acumuladorProg += sueldo;
        contadorProg++;
      }
      else if(puesto == "analista"){
        acumuladorAnali += sueldo;
        contadorAnali++;
      }
      else {
          acumuladorQa += sueldo;
          contadorQa++;
      }
  
      if(flagSexo == 0 || sueldo > sexoSueldo){
          sexoSueldo = sueldo;
          sexoMayor = sexo;
          flagSexo = 1;
      }
      if(flagFem == 0 || sexo == "femenino" && sueldo > femMayorSueldo){
          femMayorSueldo = sueldo;
          femNombre = nombre;
          flagFem = 1;
          contadorFemMayor++;
      }
  
      if(puesto == "programador" && sexo == "no binario" && (sueldo >= 20000 && sueldo <= 55000)){
          contadorProgNo++;
      }
  
      seguir = prompt("Quiere ingresar mas datos: escriba s");
    } while (seguir == "s");
      
   if(contadorProg != 0){
    promePro = acumuladorProg/contadorProg;
   }
   if(contadorAnali != 0){
      promeAna = acumuladorAnali/contadorAnali;
   }
   if(contadorQa != 0){
      promeQa = acumuladorQa/contadorQa;
   }
   
   console.log(`a) Promedio Prog: ${promePro} Analista: ${promeAna} QA: ${promeQa}`);
   console.log("b) El sexo con mayor sueldo es: " + sexoMayor);
  
   if(contadorFemMayor == 0){
      console.log("c) No se ingresaron mujeres");
  }else{
      console.log("c) La mujer con mayor sueldo es: " + femNombre);
  }
  
  if(contadorProgNo == 0){
      console.log("d) No se ingresaron programadores no binarios");
  }else{
      console.log("d) la cantidad de programadores no binarios es " + contadorProgNo);
  }
  
}
