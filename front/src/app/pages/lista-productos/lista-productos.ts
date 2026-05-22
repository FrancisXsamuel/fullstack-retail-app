import { Component, inject, signal } from '@angular/core';
import { ProductosService } from '../../services/productos/productos-service';
import { Productos } from '../../interfaces/productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  imports: [],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export default class ListaProductos {
  private productosService = inject(ProductosService);
  private router = inject(Router);

  productosDelServicio = signal<Productos[]>([]);

  ngOnInit() {
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productosDelServicio.set(data);
        console.log('llega los datos: ', this.productosDelServicio());
      },
      error: (err) => {
        console.log('algo salio mal: ', err);
      },
    });
  }

  direccionDetalle(id: number) {
    // console.log('el id del producto es: ', id);
    this.router.navigate([`/detalle-producto/${id}`]);
  }
}
