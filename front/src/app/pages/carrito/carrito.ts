import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito/carrito-service';

@Component({
  selector: 'app-carrito',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export default class Carrito {
  private carritoService = inject(CarritoService);

  listaProductos = this.carritoService.carrito;

  totalArticulos = this.carritoService.cantidadTotal;

  aumentarCantidad(productoId: number) {
    const item = this.listaProductos().find((i) => i.producto.id === productoId);
    if (item) {
      this.carritoService.agregarProducto(item.producto);
    }
  }

  disminuirCantidad(productoId: number) {
    this.carritoService.disminuirProducto(productoId);
  }

  eliminarDelCarrito(productoId: number) {
    this.carritoService.eliminarProducto(productoId);
  }
}
