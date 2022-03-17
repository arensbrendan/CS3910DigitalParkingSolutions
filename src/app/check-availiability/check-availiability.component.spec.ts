import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckAvailiabilityComponent} from './check-availiability.component';

describe('CheckAvailiabilityComponent', () => {
  let component: CheckAvailiabilityComponent;
  let fixture: ComponentFixture<CheckAvailiabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckAvailiabilityComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAvailiabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
