import { Component,  Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  standalone: false,
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent implements OnInit {

  @Input() produtos: any;

  constructor(){}

  ngOnInit(): void {}

}


