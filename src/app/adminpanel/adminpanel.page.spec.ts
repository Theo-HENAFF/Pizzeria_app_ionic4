import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpanelPage } from './adminpanel.page';

describe('AdminpanelPage', () => {
  let component: AdminpanelPage;
  let fixture: ComponentFixture<AdminpanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpanelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
