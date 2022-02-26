import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesLivresComponentComponent } from './mes-livres-component.component';

describe('MesLivresComponentComponent', () => {
  let component: MesLivresComponentComponent;
  let fixture: ComponentFixture<MesLivresComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesLivresComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesLivresComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
