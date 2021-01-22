import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFirebaseComponent } from './list-firebase.component';

describe('ListFirebaseComponent', () => {
  let component: ListFirebaseComponent;
  let fixture: ComponentFixture<ListFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFirebaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
