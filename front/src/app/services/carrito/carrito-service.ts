import { computed, Injectable, signal } from '@angular/core';
import { Carrito } from '../../interfaces/carrito';
import { Productos } from '../../interfaces/productos';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private listaCarrito = signal<Carrito[]>([]);

  carrito = this.listaCarrito.asReadonly();

  cantidadTotal = computed(() => {
    return this.listaCarrito().reduce((acc, item) => acc + item.cantidad, 0);
  });

  agregarProducto(producto: Productos) {
    const existente = this.listaCarrito().find((item) => item.producto.id === producto.id);

    if (existente) {
      this.listaCarrito.update((carrito) => {
        return carrito.map((item) => {
          if (item.producto.id === producto.id) {
            return { ...item, cantidad: item.cantidad + 1 };
          }
          return item;
        });
      });
    } else {
      this.listaCarrito.update((carrito) => [...carrito, { producto, cantidad: 1 }]);
    }
  }

  disminuirProducto(productoId: number) {
    this.listaCarrito.update((carrito) => {
      return carrito.map((item) => {
        // Si coincide el ID y la cantidad es mayor a 1, restamos 1
        if (item.producto.id === productoId && item.cantidad > 1) {
          return { ...item, cantidad: item.cantidad - 1 };
        }
        return item;
      });
    });
  }

  eliminarProducto(productoId: number) {
    this.listaCarrito.update((carrito) => {
      return carrito.filter((item) => item.producto.id !== productoId);
    });
  }
}
