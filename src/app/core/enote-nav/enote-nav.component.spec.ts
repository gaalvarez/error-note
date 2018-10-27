
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EnoteNavComponent } from './enote-nav.component';

describe('EnoteNavComponent', () => {
  let component: EnoteNavComponent;
  let fixture: ComponentFixture<EnoteNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [EnoteNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnoteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
