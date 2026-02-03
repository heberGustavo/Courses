import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariablesChangeDetactionComponent } from './template-variables-change-detaction.component';

describe('TemplateVariablesChangeDetactionComponent', () => {
  let component: TemplateVariablesChangeDetactionComponent;
  let fixture: ComponentFixture<TemplateVariablesChangeDetactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateVariablesChangeDetactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateVariablesChangeDetactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
