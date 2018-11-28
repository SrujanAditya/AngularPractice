import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesSampComponent } from './directives-samp.component';

describe('DirectivesSampComponent', () => {
  let component: DirectivesSampComponent;
  let fixture: ComponentFixture<DirectivesSampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesSampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesSampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
