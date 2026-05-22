import { Component } from '@angular/core';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-menu',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './pagina-menu.html',
  styleUrl: './pagina-menu.css',
})
export default class PaginaMenu {}
