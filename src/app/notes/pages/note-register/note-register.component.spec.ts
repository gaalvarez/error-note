import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRegisterComponent } from './note-register.component';

describe('NoteRegisterComponent', () => {
  let component: NoteRegisterComponent;
  let fixture: ComponentFixture<NoteRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
