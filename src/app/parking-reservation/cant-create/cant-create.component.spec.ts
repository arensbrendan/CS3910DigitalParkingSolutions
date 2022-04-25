import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantCreateComponent } from './cant-create.component';

describe('CantCreateComponent', () => {
  let component: CantCreateComponent;
  let fixture: ComponentFixture<CantCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
