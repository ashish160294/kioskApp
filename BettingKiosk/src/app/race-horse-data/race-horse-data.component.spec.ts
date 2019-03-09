import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceHorseDataComponent } from './race-horse-data.component';

describe('RaceHorseDataComponent', () => {
  let component: RaceHorseDataComponent;
  let fixture: ComponentFixture<RaceHorseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceHorseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceHorseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
