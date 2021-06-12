import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>()

  constructor(public clientesServicio: ClientesService ) { }

  ngOnInit(): void {
    this.clientes = this.clientesServicio.clientesLocalStorage; 
  }

  buscarClientes(event: any){
    let nombreBuscar:string = event.target.value; 
    this.clientes = this.clientesServicio.clientesLocalStorage.filter(cliente=>{
      return cliente.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }
}
