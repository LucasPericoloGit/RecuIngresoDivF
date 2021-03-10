
function mostrar()
{
 let nombre;
 let cantidad;
 let marca;
 let precio;
 let subtotal;
 let total;
 let descuento = 0;
 let acumuladorFel = 0;
 let acumuladorArg = 0;
 let acumuladorIlu = 0;
 let contArg = 0;
 let contFel = 0;
 let contIlu = 0;
 let promedioArg = 0;
 let promedioFel = 0;
 let promedioIlu = 0;
 let marcaVentas;
 let totalDes;
 let seguir;

 do{
    nombre = prompt("Ingrese su nombre");

	cantidad = parseInt(prompt("Ingrese cantidad"));
	while (isNaN(cantidad)){
		cantidad = parseInt(prompt("Error. Ingrese cantidad"));
	}
	marca = prompt("Ingrese su marca: FelipeLamparas, ArgentinaLuz, Illuminatis").toLowerCase();
       while (marca != "FelipeLamparas" && marca != "ArgentinaLuz" && marca != "Illuminatis") {
    marca = prompt("Error. Ingrese su marca: FelipeLamparas, ArgentinaLuz, Illuminatis").toLowerCase();
     }
	precio = parseInt(prompt("Ingrese precio"));
    while (precio < 0){
    precio = parseInt(prompt("Error. Ingrese precio"));
	}
	if (marca == "Felipelamparas") {
		acumuladorFel += cantidad;
		contFel++;
	  } else if (marca == "ArgentinaLuz") {
		acumuladorArg += cantidad;
		contArg++;
	  } else {
		acumuladorIlu += cantidad;
		contIlu++;
	  }
    
	subtotal = precio * cantidad;
	total += subtotal
    
	
	seguir = prompt("Quiere ingresar mas datos: escriba s")
} while (seguir == "s")

	
if(marca == "FelipeLamparas" && cantidad >= 5){
       descuento = 0.10;
	   
 	}
	else if(marca == "ArgentinaLuz" && cantidad >= 3){
       descuento = 0.05;
    } else {
		descuento = 0;
	}

	totalDes = total * descuento;



console.log("a) la empresa gano " + total);

if (descuento = 0) {
		console.log("b)la empresa no tuvo perdidas");
	  } else {
		console.log("b) la empresa perdio en descuentos" + totalDes);
	  }

 if(contArg != 0){
		promedioArg = acumuladorArg/contArg;
	   }
if(contFel != 0){
	 promedioFel = acumuladorFel/contFel;
 }
if(contIlu != 0){
		  promedioIlu = acumuladorIlu/contIlu;
 }

 console.log(`c) Promedio ArgentinaLuz: ${promedioArg} FelipeLamparas: ${promedioFel} Illuminatis: ${promedioIlu}`);	

 if (contArg > contFel && contArg > contIlu) {
    marcaVentas = "ArgentinaLuz";
  } else if (contFel >= contArg && contFel > contIlu) {
    marcaVentas = "FelipeLamparas";
  } else {
    marcaVentas = "Illuminatis";
  }
  console.log("la marca con mas ventas es " + marcaVentas);

 
	
}

