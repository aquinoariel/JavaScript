class producto{
    constructor(nombre, precio){
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }

    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

const productos = [];

productos.push(new producto(`fideos`, 150));
productos.push(new producto(`gaseosa`, 200));
productos.push(new producto(`paty`, 180));
productos.push(new producto(`sopa`, 100));

for (const producto of productos)
producto.sumaIva();
console.log(productos);
