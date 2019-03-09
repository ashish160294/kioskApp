import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceHorseListComponent } from './race-horse-list.component';

describe('RaceHorseListComponent', () => {
  let component: RaceHorseListComponent;
  let fixture: ComponentFixture<RaceHorseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceHorseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceHorseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
