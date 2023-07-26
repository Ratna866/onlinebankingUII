import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAccComponent } from './open-acc.component';

describe('OpenAccComponent', () => {
  let component: OpenAccComponent;
  let fixture: ComponentFixture<OpenAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
