import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais-paginacao',
  templateUrl: './botao-carregar-mais-paginacao.component.html',
  styleUrls: ['./botao-carregar-mais-paginacao.component.css']
})
export class BotaoCarregarMaisPaginacaoComponent implements OnInit {

  @Input() haMaisPensamentos: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
