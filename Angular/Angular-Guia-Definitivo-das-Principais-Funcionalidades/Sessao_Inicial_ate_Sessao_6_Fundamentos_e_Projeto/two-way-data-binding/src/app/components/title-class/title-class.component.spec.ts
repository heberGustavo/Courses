import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleClassComponent } from './title-class.component';

describe('TitleClassComponent', () => {
  let component: TitleClassComponent;
  let fixture: ComponentFixture<TitleClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
