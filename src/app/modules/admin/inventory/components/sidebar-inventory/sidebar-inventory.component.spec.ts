import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInventoryComponent } from './sidebar-inventory.component';

describe('SidebarInventoryComponent', () => {
  let component: SidebarInventoryComponent;
  let fixture: ComponentFixture<SidebarInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
