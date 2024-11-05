import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsnSectionComponent } from './msn-section.component';

describe('MsnSectionComponent', () => {
  let component: MsnSectionComponent;
  let fixture: ComponentFixture<MsnSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsnSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsnSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
