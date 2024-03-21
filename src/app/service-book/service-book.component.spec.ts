import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookComponent } from './service-book.component';

describe('ServiceBookComponent', () => {
  let component: ServiceBookComponent;
  let fixture: ComponentFixture<ServiceBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
