import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Array<Productos> = new Array<Productos>(); 
  constructor(public productosServicio : ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productosServicio.productosLocalStorage ; 
  }

  buscarProductos(nombre:any){
    let nombreBucar = nombre.target.value ; 
    this.productos = this.productosServicio.productosLocalStorage.filter( producto => {
      return producto.nombre.toLocaleLowerCase().includes(nombreBucar.toLocaleLowerCase()); 
    } )
  }

}
