import { PedidoDetalle } from "./pedido-detalle";

export class Pedido {
    pedidoId: number; 
    clienteId: number;
    nombreCliente: string;
    total: number;
    pedidoDetalle: Array<PedidoDetalle>

    constructor(){
        this.pedidoId = this.pedidoId
        this.clienteId = this.clienteId
        this.nombreCliente = this.nombreCliente
        this.total = this.total
        this.pedidoDetalle = new Array<PedidoDetalle>(); 
    }
}