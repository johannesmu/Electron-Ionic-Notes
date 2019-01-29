import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesEditPage } from './notes-edit.page';

describe('NotesEditPage', () => {
  let component: NotesEditPage;
  let fixture: ComponentFixture<NotesEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
