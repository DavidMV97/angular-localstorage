import { Component, OnInit } from '@angular/core';


interface Clientes {
  nombre: string;
  apellido: string;
  edad: number;
}

interface Productos {
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

// @NgModule({
//   imports: [
//     BrowserModule,
//     CommonModule
//   ]
// })


export class ClientesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // this.clientes.push({
    //   nombre: 'carmen',
    //   apellido: 'najera',
    //   edad: 23
    // },
    // {
    //   nombre: 'Leidy',
    //   apellido: 'lopez', 
    //   edad: 19
    // }
    // )

    // this.productos.push({
    //   nombre: 'maiz',
    //   precio: 15,

    // },
    // {
    //   nombre: 'frijol',
    //   precio: 90
    // }
    // )

  
  }

  guardarCliente() {
    let addClients: Array<Clientes> = new Array<Clientes>();

    // addClients.push(
    //   {
    //     nombre: 'Maria',
    //     apellido: 'Perez',
    //     edad: 17
    //   },
    //   {
    //     nombre: 'Luisa ',
    //     apellido: 'Lopez ',
    //     edad: 20
    //   },
    //   {
    //     nombre: 'Laura',
    //     apellido: 'Martinez',
    //     edad: 21
    //   },
    // )

    localStorage.setItem("clientes", JSON.stringify(addClients));
  }
  guardarProducto() {

    let addProductos: Array<Productos> = new Array<Productos>()
    // addProductos.push(
    //   {
    //     nombre: 'maiz',
    //     precio: 24
    //   },
    //   {
    //     nombre: 'frijol',
    //     precio: 45
    //   },
    //   {
    //     nombre: 'banano',
    //     precio: 78
    //   },
    // )

    localStorage.setItem("productos", JSON.stringify(addProductos));
  }

  eliminarClientes() {
    localStorage.removeItem('clientes')
  }

  eliminarProductos() {
    localStorage.removeItem('productos')
  }
  eliminarTodos() {
    localStorage.clear()
  }

  get clientesLocales(): Clientes[] {
    let clientesLocalesStorage: Clientes[] = JSON.parse(localStorage.getItem("clientes") || '{}')
    if (clientesLocalesStorage == null) {
      return new Array<Clientes>();
    }
    return clientesLocalesStorage
  }

  get productosLocales(): Productos[] {
    let productosLocalesStorage: Productos[] = JSON.parse(localStorage.getItem("productos") || '{}')
    if (productosLocalesStorage == null) {
      return new Array<Productos>();
    }
    return productosLocalesStorage
  }

}
