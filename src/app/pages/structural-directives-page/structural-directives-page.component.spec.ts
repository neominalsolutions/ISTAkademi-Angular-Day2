import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesPageComponent } from './structural-directives-page.component';

describe('StructuralDirectivesPageComponent', () => {
  let component: StructuralDirectivesPageComponent;
  let fixture: ComponentFixture<StructuralDirectivesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectivesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
