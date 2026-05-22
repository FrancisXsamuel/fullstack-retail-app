import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Productos } from '../../interfaces/productos';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/api/productos';
  private http = inject(HttpClient);

  getProductos() {
    return this.http.get<Productos[]>(this.apiUrl);
  }

  getDetalleProductos(id: string | null) {
    return this.http.get<Productos>(`${this.apiUrl}/${id}`);
  }
}
