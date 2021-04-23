import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreoNavigationItem } from '@treo/components/navigation';

@Component({
  selector: 'sidebar-inventory',
  templateUrl: './sidebar-inventory.component.html',
  styleUrls: ['./sidebar-inventory.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarInventoryComponent implements OnInit {

  menuData: TreoNavigationItem[];
  constructor() { }

  ngOnInit(): void {
    this.menu()
  }
  menu ():void {
    this.menuData = [
      {
        title   : 'Productos',
        subtitle: 'Comercial VYA',
        type    : 'group',
        children: [
          {
              title: 'Listado',
              type : 'basic',
              icon : 'heroicons_outline:clipboard-list',
              link : 'products'
            },
            {
              title: 'Crear Producto',
              type : 'basic',
              icon : 'heroicons_outline:plus',
              link : 'create'
          }
        ]
      }
    ]
  }

}
