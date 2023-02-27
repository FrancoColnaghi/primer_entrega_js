let finalizado = false;
let condimentacion = "";

const nombre = prompt("Ingresa tu nombre");
alert("Hola "+nombre+"! Personaliza aqui el contenido de tu hamburguesa");

while (!finalizado) {
  let agregado = prompt("ingresa el numero del condimento a agregar:\n1-Mayonesa\n2-Mostaza\n3-Ketchup\n4-Lechuga\n5-Tomate\n0-Finalizar");
  
  switch (agregado) {
    case "0": 
      finalizado = true; 
      break;
    case "1":
      condimentacion = condimentacion + "\n+mayonesa";
      alert("mayonesa agregada");
      break;
    case "2":
      condimentacion = condimentacion + "\n+mostaza";
      alert("mostaza agregada");
      break;
    case "3":
      condimentacion = condimentacion + "\n+ketchup";
      alert("ketchup agregado");
      break;
    case "4":
      condimentacion = condimentacion + "\n+lechuga";
      alert("lechuga agregada");
      break;
    case "5":
      condimentacion = condimentacion + "\n+tomate";
      alert("tomate agregado");
      break;
    default:
        alert("el valor ingresado no coincide con ningun condimento.");
        break;
  };
};

if (condimentacion==""){
    alert(nombre+", tu hamburguesa no agrega ningun condimento")
} else{
    alert(nombre+", tu hamburguesa agrega: " + condimentacion);
}