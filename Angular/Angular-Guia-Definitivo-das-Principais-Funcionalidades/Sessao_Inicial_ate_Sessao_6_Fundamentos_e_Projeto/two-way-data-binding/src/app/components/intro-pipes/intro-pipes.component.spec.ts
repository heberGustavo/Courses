import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPipesComponent } from './intro-pipes.component';

describe('IntroPipesComponent', () => {
  let component: IntroPipesComponent;
  let fixture: ComponentFixture<IntroPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroPipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
