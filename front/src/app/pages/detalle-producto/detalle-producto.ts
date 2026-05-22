import { Component, inject, signal } from '@angular/core';
import { ProductosService } from '../../services/productos/productos-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Productos } from '../../interfaces/productos';
import { switchMap } from 'rxjs';
import { CarritoService } from '../../services/carrito/carrito-service';

@Component({
  selector: 'app-detalle-producto',
  imports: [RouterLink],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export default class DetalleProducto {
  private productosService = inject(ProductosService);
  private route = inject(ActivatedRoute);
  private carritoService = inject(CarritoService);

  producto = signal<Productos | null>(null);

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');
          return this.productosService.getDetalleProductos(id);
        }),
      )
      .subscribe((data) => {
        this.producto.set(data);
        console.log('el id es: ', this.route.snapshot.paramMap.get('id'));
        console.log('el producto es: ', this.producto());
      });
  }

  agregarAlCarrito() {
    const productoActual = this.producto();
    if (productoActual) {
      this.carritoService.agregarProducto(productoActual);
      console.log('Producto agregado al carrito: ', productoActual);
    }
  }
}
