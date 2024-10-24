import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipospublicacionesComponent } from './tipospublicaciones.component';

describe('TipospublicacionesComponent', () => {
  let component: TipospublicacionesComponent;
  let fixture: ComponentFixture<TipospublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipospublicacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipospublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
