import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesLivresCardComponent } from './mes-livres-card.component';

describe('MesLivresCardComponent', () => {
  let component: MesLivresCardComponent;
  let fixture: ComponentFixture<MesLivresCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesLivresCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesLivresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
