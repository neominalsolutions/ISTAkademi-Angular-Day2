import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectivesPageComponent } from './attribute-directives-page.component';

describe('AttributeDirectivesPageComponent', () => {
  let component: AttributeDirectivesPageComponent;
  let fixture: ComponentFixture<AttributeDirectivesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDirectivesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDirectivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
