import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregarMaisPaginacaoComponent } from './botao-carregar-mais-paginacao.component';

describe('BotaoCarregarMaisPaginacaoComponent', () => {
  let component: BotaoCarregarMaisPaginacaoComponent;
  let fixture: ComponentFixture<BotaoCarregarMaisPaginacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCarregarMaisPaginacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarregarMaisPaginacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
