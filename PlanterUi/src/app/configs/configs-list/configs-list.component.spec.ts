import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigsListComponent } from './configs-list.component';

describe('ConfigsListComponent', () => {
  let component: ConfigsListComponent;
  let fixture: ComponentFixture<ConfigsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
