import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  listaProdutos2: any[] = [
    {alt: 'Imagem do Angular', idProduto: 1, foto: "../../../_assets/img/angular.png", nomeProduto: 'Curso de Angular', promocao: true, dataValidade: '2025-12-30', precoProduto: 1400.00},
    {alt: 'Imagem do C-Sharp', idProduto: 2, foto: "../../../_assets/img/c-sharp.png", nomeProduto: 'Curso de dotNetCore', promocao: false, dataValidade: '2025-12-30', precoProduto: 1100.00},
    {alt: 'Imagem do Sql', idProduto: 3, foto: "../../../_assets/img/sql.jpg", nomeProduto: 'Curso de Sql', promocao: true, dataValidade: '2025-12-30', precoProduto: 1200.00},
    {alt: 'Imagem do Java', idProduto: 4, foto: "../../../_assets/img/java.png", nomeProduto: 'Curso de Java', promocao: false, dataValidade: '2025-12-30', precoProduto: 1300.00},
    {alt: 'Imagem do Arduino', idProduto: 5, foto: "../../../_assets/img/arduino.png", nomeProduto: 'Curso de Aarduino', promocao: true, dataValidade: '2025-12-30', precoProduto: 1400.00},
    {alt: 'Imagem do C++', idProduto: 6, foto: "../../../_assets/img/c++.png", nomeProduto: 'Curso de C++', promocao: false, dataValidade: '2025-12-30', precoProduto: 1100.00},
    {alt: 'Imagem do Flutter', idProduto: 7, foto: "../../../_assets/img/flutter.png", nomeProduto: 'Curso de Flutter', promocao: true, dataValidade: '2025-12-30', precoProduto: 1200.00},
    {alt: 'Imagem do NodeJs', idProduto: 8, foto: "../../../_assets/img/node-js-new.png", nomeProduto: 'Curso de NodeJs', promocao: false, dataValidade: '2025-12-30', precoProduto: 1300.00},
  ]

  nome: string = "Curso de Angular";
  anuncio: string = `O ${this.nome} está em promoção`;
     constructor(){}

  ngOnInit(): void {    

  }
}




