import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clientes } from 'src/app/models/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.scss']
})
export class AgregarClientesComponent implements OnInit {
  formularioAgregar: FormGroup ; 
  cliente: Clientes = new Clientes(); 
  constructor( public fb: FormBuilder , public clientesServicio: ClientesService ) {
  }

  ngOnInit(): void {
    this.formularioAgregar = this.fb.group({
      nombre: ['' , Validators.required ],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required]
    })
  }

  agregar(){
    this.cliente = this.formularioAgregar.value as Clientes;
    this.clientesServicio.agregarLocalStorage(this.cliente);
    this.formularioAgregar.reset(); 
  }

}
