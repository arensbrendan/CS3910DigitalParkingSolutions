import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TicketCreatedComponent} from './ticket-created.component';

describe('TicketCreatedComponent', () => {
  let component: TicketCreatedComponent;
  let fixture: ComponentFixture<TicketCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketCreatedComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
