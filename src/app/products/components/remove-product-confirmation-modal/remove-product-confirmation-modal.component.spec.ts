import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProductConfirmationModalComponent } from './remove-product-confirmation-modal.component';

describe('RemoveProductConfirmationModalComponent', () => {
  let component: RemoveProductConfirmationModalComponent;
  let fixture: ComponentFixture<RemoveProductConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveProductConfirmationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProductConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
