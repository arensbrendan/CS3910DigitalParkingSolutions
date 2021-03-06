import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrintTicketComponent} from './print-ticket.component';

describe('TicketCreatedComponent', () => {
  let component: PrintTicketComponent;
  let fixture: ComponentFixture<PrintTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintTicketComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
