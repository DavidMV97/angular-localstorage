import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let pedido: Pedido = new Pedido(); 
    pedido.pedidoId = 1; 
    pedido.clienteId = 1 ; 
    pedido.nombreCliente = 'David'; 
    pedido.total = 1500; 
    pedido.pedidoDetalle.push({
      productoId: 1,
      nombreProducto: 'maiz',
      cantidad: 5, 
      precio: 15,
      total: 5
    },
    {
      productoId: 2,
      nombreProducto: 'frijol',
      cantidad: 5, 
      precio: 15,
      total: 5
    },
    
    )
    console.log(pedido); 
  }

}
