import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsLivresComponent } from './user-details-livres.component';

describe('UserDetailsLivresComponent', () => {
  let component: UserDetailsLivresComponent;
  let fixture: ComponentFixture<UserDetailsLivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsLivresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
