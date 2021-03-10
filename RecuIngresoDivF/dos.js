function mostrar()
{
    let nombre;
    let carrera;
    let sexo;
    let edad;
    let cantidad;
    let nota;
    let mejorPromedio = 0;
    let nombreMejorProm;
    let nombreAlumJoven;
    let edadMasJoven;
    let cantidadMayorMateria;
    let edadMayorMateria;
    let nombreMayorMateria;
    let contadorFisica = 0;
    let contadorQuimica = 0;
    let contadorSistemas = 0;
    let contadorTotal = 0;
    let porcentajeFis = 0;
    let porcentajeQui = 0;
    let porcentajeSis = 0;
    let flagMejorProme = 0;
    let flagJoven = 0;
    let flagMasMaterias = 0;
  
   
   for(let i = 0; i < 500; i++){
      
      nombre = prompt("Ingrese su nombre");
      
      carrera = prompt("Ingrese su carrera: quimica, fisica, sistemas").toLowerCase();
      while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas") {
        carrera = prompt("Error. Ingrese su carrera: quimica, fisica, sistemas").toLowerCase();
      }  
      sexo = prompt("Ingrese su sexo: masculino, femenino, no binario").toLowerCase();
       while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario") {
       sexo = prompt("Error. Ingrese su sexo: masculino, femenino, no binario").toLowerCase();
       }
      cantidad = parseInt(prompt("Ingrese la cantidad de materias: 1 a 5"));
        while (cantidad < 1 || cantidad > 5 || isNaN(cantidad)) {
          cantidad = parseInt(prompt("Error. Ingrese la cantidad de materias: 1 a 5"));
        } 
      nota = parseInt(prompt("Ingrese su nota: 0 a 10"));
      while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = parseInt(prompt("Error. Ingrese su nota: 0 a 10"));
      }
      edad = parseInt(prompt("Ingrese su edad"));
     while (edad <= 0 || isNaN(edad)) {
      edad = parseInt(prompt("Error. Ingrese su edad"));
       }
       
       if((carrera == "fisica" && nota > mejorPromedio) || flagMejorProme == 0){
        mejorPromedio = nota;
        nombreMejorProm = nombre;
        flagMejorProme = 1;
       }
       if(sexo == "femenino" && (edad < edadMasJoven || flagJoven == 0)){
        edadMasJoven = edad;
        nombreAlumJoven = nombre;
        flagJoven = 1;
        
       }
       if(carrera == "quimica"){
        contadorQuimica++;
      }
      else if(carrera == "fisica"){
        contadorFisica++;
      }
      else {
          contadorSistemas++;
      }
      contadorTotal++;

    //La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica

    if(carrera != "quimica" && (flagMasMaterias == 0 || cantidad > cantidadMayorMateria)){
       cantidadMayorMateria = cantidad;
       edadMayorMateria = edad;
       nombreMayorMateria = nombre;
       flagMasMaterias = 1;
    }
      
    }// termina el for
      
      if(contadorFisica != 0){
        porcentajeFis = (contadorFisica*  100) /contadorTotal;
       }
       if(contadorQuimica != 0){
        porcentajeQui = (contadorQuimica*  100) /contadorTotal;
       }
       if(contadorSistemas != 0){
          porcentajeSis = (contadorSistemas* 100)/contadorTotal;
       }
       
       if(flagMejorProme == 0){
        console.log("a) No se ingreso a nadie que estudie Fisica")
      } else{
        console.log("a) el nombre del mejor promedio de Fisica es: " + nombreMejorProm);
      }

      
      
      if( flagJoven == 0){
        console.log("b) No se ingresaron mujeres")
      }else {
        console.log("b) el nombre de la alumna mas joven es: " + nombreAlumJoven);
      }
      
      console.log(`c) Porcentaje Fisica: ${porcentajeFis.toFixed(2)} Quimica: ${porcentajeQui.toFixed(2)} Sistemas: ${porcentajeSis.toFixed(2)}`);
 
      if(flagMasMaterias == 0){
        console.log("d) No se ingreso a nadie que no estudie quimica")
      } else{
        console.log("d) El nombre del que mas cursa exceptuando Quimica es: " + nombreMayorMateria + " y su edad es: " + edadMayorMateria);
      }

}
