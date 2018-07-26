import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToWatchListComponent } from './add-to-watch-list.component';

describe('AddToWatchListComponent', () => {
  let component: AddToWatchListComponent;
  let fixture: ComponentFixture<AddToWatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToWatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
