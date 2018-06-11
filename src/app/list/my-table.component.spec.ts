
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import {
  MatPaginatorModule,
  MatTableModule,
} from '@angular/material';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatPaginatorModule,
      ],
      declarations: [ ListComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  xit('should compile', () => {
    expect(component).toBeTruthy();
  });
});
