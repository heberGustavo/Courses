import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBackgroundComponent } from './input-background.component';

describe('InputBackgroundComponent', () => {
  let component: InputBackgroundComponent;
  let fixture: ComponentFixture<InputBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
