import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmedTicketComponent} from './confirmed-ticket.component';

describe('ConfirmedTicketComponent', () => {
  let component: ConfirmedTicketComponent;
  let fixture: ComponentFixture<ConfirmedTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmedTicketComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
