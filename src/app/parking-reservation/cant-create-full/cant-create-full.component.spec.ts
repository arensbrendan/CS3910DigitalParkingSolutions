import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CantCreateFullComponent} from './cant-create-full.component';

describe('CantCreateComponent', () => {
  let component: CantCreateFullComponent;
  let fixture: ComponentFixture<CantCreateFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CantCreateFullComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantCreateFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
