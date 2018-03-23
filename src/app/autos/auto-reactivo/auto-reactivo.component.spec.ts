import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoReactivoComponent } from './auto-reactivo.component';

describe('AutoReactivoComponent', () => {
  let component: AutoReactivoComponent;
  let fixture: ComponentFixture<AutoReactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoReactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
