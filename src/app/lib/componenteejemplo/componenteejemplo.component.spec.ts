import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteejemploComponent } from './componenteejemplo.component';

describe('ComponenteejemploComponent', () => {
  let component: ComponenteejemploComponent;
  let fixture: ComponentFixture<ComponenteejemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteejemploComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteejemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
