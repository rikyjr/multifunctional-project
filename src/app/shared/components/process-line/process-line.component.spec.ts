import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessLineComponent } from './process-line.component';

describe('ProcessLineComponent', () => {
  let component: ProcessLineComponent;
  let fixture: ComponentFixture<ProcessLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcessLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
