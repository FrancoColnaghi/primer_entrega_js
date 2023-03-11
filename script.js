let finalizado = false;
let condimentacion = "";
let listaHamburguesas = [];
let cant = 1;


function hamburguesa(nombre,condimentacion,precio){
  this.nombre = nombre;
  this.condimentacion = condimentacion;
  this.precio = precio;
}

listaHamburguesas.push(new hamburguesa("clasica","mayonesa, lechuga y tomate",500));
listaHamburguesas.push(new hamburguesa("especial","queso, huevo, lechuga y tomate",700));
listaHamburguesas.push(new hamburguesa("americana","cheddar y panceta",600));

while (!finalizado) {
  let agregado = prompt(`Panel administrador de hamburguesas:\n
  1-Ver listado de hamburguesas\n
  2-Agregar hamb a la lista\n
  3-Eliminar hamb de la lista\n
  4-Ordenar por $ de - a +\n
  5-Filtrar por $ < X\n
  0-Finalizar`);
  
  switch (agregado) {
    case "0": 
      finalizado = true; 
      break;
    case "1":
      for (let i=0; i < listaHamburguesas.length; i++){
        alert(`Hamburguesa ${listaHamburguesas[i].nombre}!\n
        ${listaHamburguesas[i].condimentacion}.\n
        $ ${listaHamburguesas[i].precio}\n \n`)
      }
      break;

    case "2":
      const nombreN = prompt("ingrese nombre de nueva hamburguesa");
      const condN = prompt("ingrese condimentacion de nueva hamburguesa");
      const precioN = prompt("ingrese precio de nueva hamburguesa");

      listaHamburguesas.push(new hamburguesa(nombreN,condN,precioN));
      break;

    case "3":
      let hambEliminar = prompt("ingrese nombre de hamburguesa a eliminar");
      for (pos in listaHamburguesas){
        if (listaHamburguesas[pos].nombre == hambEliminar){
          listaHamburguesas.splice(pos,1);
          alert(`hamburguesa ${hambEliminar} eliminada`);
        }
      }
      break;

    case "4":
      listaHamburguesas.sort(function(a,b){
        if (a.precio > b.precio){
          return 1;
        }
        if (a.precio < b.precio){
          return -1;
        }
        return 0;
      });
      alert("lista ordenada");
      break;
    case "5":
      let menorQue = prompt("ingresa el valor maximo de las hamburguesas");
      let listaFiltrada = [];
      for (n in listaHamburguesas){
        if (listaHamburguesas[n].precio <= menorQue){
          listaFiltrada.push(listaHamburguesas[n]);
        }
      }
      for (let i=0; i < listaFiltrada.length; i++){
        alert(`Hamburguesa ${listaFiltrada[i].nombre}!\n
        ${listaFiltrada[i].condimentacion}.\n
        $ ${listaFiltrada[i].precio}\n \n`)
      }
      break;
    default:
        alert("el valor ingresado no coincide con ningun condimento.");
        break;
  };
};

const burguerList = document.querySelector(".burguer-list");

for (i in listaHamburguesas){
  var card = document.createElement("DIV")
  card.classList.add("card");

  var nombreH = document.createElement("H4");
  var condH = document.createElement("P");
  var precioH = document.createElement("P");

  var texto = document.createTextNode(`${listaHamburguesas[i].nombre}`)
  nombreH.appendChild(texto)

  texto = document.createTextNode(`${listaHamburguesas[i].condimentacion}`)
  condH.appendChild(texto)

  texto = document.createTextNode(`$ ${listaHamburguesas[i].precio}`)
  precioH.appendChild(texto)

  card.appendChild(nombreH)
  card.appendChild(condH)
  card.appendChild(precioH)

  burguerList.appendChild(card)
}