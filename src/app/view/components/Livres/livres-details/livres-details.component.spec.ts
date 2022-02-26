import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresDetailsComponent } from './livres-details.component';

describe('LivresDetailsComponent', () => {
  let component: LivresDetailsComponent;
  let fixture: ComponentFixture<LivresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivresDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
