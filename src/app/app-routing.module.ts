import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AgregarClientesComponent } from './components/agregar-clientes/agregar-clientes.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';

const routes: Routes = [
  { path: '' , component: HomeComponent }, 
  { path: 'productos', component: ProductosComponent }, 
  { path: 'pedidos', component: PedidosComponent },
  { path: 'agregar-cliente', component: AgregarClientesComponent },
  { path: 'agregar-productos' , component: AgregarProductosComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
