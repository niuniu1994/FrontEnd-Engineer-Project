import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresCardComponent } from './livres-card.component';

describe('LivresCardComponent', () => {
  let component: LivresCardComponent;
  let fixture: ComponentFixture<LivresCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivresCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
