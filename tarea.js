// TAREA 03/05/2023*
// Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero.

function piramide(num) {
    
    for (let i = 1; i <= num; i++) {
      let cadenaDeNumeros = '';
      
      for (let j = 1; j <= i; j++) {
        cadenaDeNumeros += j + ' ';
      }
    
      console.log(cadenaDeNumeros);
    }
  }
//Ejemplo con el numero 10
  piramide(10);

// Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos.

function iguales(array1, array2) {
  
  let identicos = [];

  for(let i = 0; i<array1.length; i++) {
    if (array2.includes(array1[i])) {
      identicos.push(array1[i]);
    }
  }
  return identicos;

}

// Ejemplo:
const array1 = ['rojo', 'azul', 'amarillo'];
const array2 = ['blanco', 'negro', 'rojo'];
const igualesArray = iguales(array1, array2);

console.log(igualesArray);

// Ejemplo 2:
const arr1 = [4, 3, true, 'manzana'];
const arr2 = ['pera', 3, false , true, 3, true];
const igualArray = iguales(arr1, arr2);

console.log(igualArray);

//Ejercicio 3
//3.1) Dado el siguiente objeto

let carrito= {
      montoTotal: 10,
      productos: ["Leche"]
  };

// Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
//Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal

class Carrito {
    constructor(montoTotal, productos) {
      this.montoTotal = montoTotal;
      this.productos = productos;
    }

    agregarProducto(nombre, precio, unidades) {
      const producto = {
         nombre: nombre,
         precio: precio,
         unidades: unidades,
      }

      this.productos.push(producto);
      this.montoTotal += precio * unidades;            
   
     }
  }

  const carrito1 = new Carrito(20, 'Mermelada');

  const carrito2 = new Carrito(40, 'Pan');

console.log(carrito1);
console.log(carrito2);
