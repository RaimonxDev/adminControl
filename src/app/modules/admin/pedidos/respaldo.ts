// <div class="absolute inset-0 flex flex-col min-w-0 overflow-hidden">

// <mat-drawer-container class="flex-auto h-full">

//         <!-- Drawer -->
//   <mat-drawer class="w-72 dark:bg-gray-900"  [mode]="drawerMode" [opened]="drawerOpened"
//          [disableClose]="false" #matDrawer>
//           <!-- sidebar -->
//           <sidebar-customer (sendCustomerSelected)="selectCustomer($event)" ></sidebar-customer>
//   </mat-drawer>

//         <!-- Drawer content -->
//   <mat-drawer-content class="flex flex-col overflow-hidden">

//   <!-- Header -->
//   <div class="flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between p-6 sm:py-8 sm:px-10 border-b bg-card dark:bg-transparent">
//     <div class="flex-1 min-w-0">
//             <!-- Title -->
//       <div class="mt-2">
//         <h2 *ngIf="selectedCustomer" class="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
//           Pedido para: <span color="primary" class="capitalize" >{{selectedCustomer.user.username}}</span>
//         </h2>
//         <h2 *ngIf="!selectedCustomer" class="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
//           No ha seleccionado un cliente
//         </h2>
//       </div>
//     </div>
//     <!-- Actions -->
//     <div class="flex flex-shrink-0 items-center mt-6 sm:mt-0 sm:ml-4">
//       <button mat-button color="primary" (click)="matDrawer.toggle()">
//         <mat-icon [svgIcon]="'heroicons_outline:user-group'"></mat-icon>
//         <span class="ml-1">
//           {{ hasSelectedCustomer.length | i18nPlural:customerMaps }}
//         </span>
//       </button>

//       <button mat-button class="text-green-600 hover:bg-green-200" [matMenuTriggerFor]="menu" #menuTrigger>Menu</button>
//       <mat-menu #menu="matMenu">
//         <button mat-menu-item (click)="openDialog()">Enviar Pedido</button>
//       </mat-menu>

//     </div>
//   </div>

//           <!-- Main -->
//   <div class="flex-auto p-6 sm:p-10 overflow-y-auto" cdkScrollable>

//   <!-- CONTENT GOES HERE -->
//   <div class="h-400 min-h-400 max-h-400">
//     <div class="flex lg:flex-row flex-col ">
//       <div class="px-4 flex-auto">
//           <h3 class="text-xl font-bold p-4">Productos</h3>
//           <mat-accordion *ngIf="productos$ | async as productos; else loading">
//             <mat-expansion-panel *ngFor="let item of productos">
//               <mat-expansion-panel-header [collapsedHeight]="'56px'">
//                 <mat-panel-title>{{item.marca}}</mat-panel-title>

//               </mat-expansion-panel-header>

//                     <mat-tab-group animationDuration="0ms">
//                             <!-- Perros -->
//                     <mat-tab label="Perro">
//                       <li *ngFor="let perro of item.productos.perro">
//                         <div class="flex flex-1 space-x-2 items-center">
//                           <div class="flex-grow max-w-60">
//                                   <p>{{perro.producto}}</p>
//                           </div>
//                           <div class="flex-shrink">
//                             <div class="flex flex-col pt-4 w-40">
//                               <mat-form-field class="select-none">
//                                 <input (keyup.enter)="saveProduct(cantidad.value, perro)"
//                                         (keyup.enter)="cantidad.value=''" class="w-full" type="number" matInput
//                                         placeholder="Cantidad" #cantidad autocomplete="off">

//                                 <button (click)="saveProduct(cantidad.value, perro)" (click)="cantidad.value=''"
//                                         mat-icon-button class="green-300">
//                                         <mat-icon svgIcon="heroicons_outline:plus-sm"></mat-icon>
//                                 </button>
//                               </mat-form-field>
//                             </div>
//                           </div>
//                         </div>
//                       </li>

//                       </mat-tab>
//                               <!-- Gatos -->
//                       <mat-tab *ngIf="item.productos.gato.length != 0" label="Gato">
//                         <li *ngFor="let gato of item.productos.gato">

//                           <div class="flex flex-1 space-x-2 items-center">
//                             <div class="flex-grow max-w-60">
//                                 <p>{{gato.producto}}</p>
//                             </div>
//                             <div class="flex-shrink">
//                               <div class="flex flex-col pt-4 w-40">
//                                 <mat-form-field class="select-none">
//                                   <input (keyup.enter)="saveProduct(cantidad.value, gato)"
//                                           (keyup.enter)="cantidad.value=''" class="w-full" type="number" matInput
//                                           placeholder="Cantidad" #cantidad autocomplete="off">

//                                   <button (click)="saveProduct(cantidad.value, gato)" (click)="cantidad.value=''"
//                                           mat-icon-button class="green-300">
//                                           <mat-icon svgIcon="heroicons_outline:plus-sm"></mat-icon>
//                                   </button>
//                                 </mat-form-field>
//                                   </div>
//                               </div>
//                               </div>
//                         </li>
//                       </mat-tab>
//                       </mat-tab-group>

//               </mat-expansion-panel>

//           </mat-accordion>

//           <ng-template #loading>
//                   <!-- <mat-progress-bar color="primary" mode="query"></mat-progress-bar> -->
//             <p class="text-center text-lg text-indigo-500 bg-indigo-100 p-1 ">Cargando los Productos Por Favor Espere</p>
//           </ng-template>
//       </div>

//       <div class="px-4 flex-auto items-center ">
//         <div class="flex space-x-4 items-center">
//           <h3 class="text-xl font-bold p-4">Actual Pedido</h3>
//         </div>

//         <!-- This example requires Tailwind CSS v2.0+ -->
//         <div class="example-container mat-elevation-z8">
//         <table mat-table [dataSource]="currentOrder">

//           <!-- Position Column -->
//           <ng-container matColumnDef="cantidad">
//             <th mat-header-cell *matHeaderCellDef> Cantidad </th>
//             <td mat-cell *matCellDef="let element"> {{element.cantidad}} </td>
//           </ng-container>

//           <!-- Name Column -->
//           <ng-container matColumnDef="producto">
//             <th mat-header-cell *matHeaderCellDef> Producto </th>
//             <td mat-cell *matCellDef="let element"> {{element.producto}} </td>
//           </ng-container>

//                   <!-- Weight Column -->
//           <ng-container matColumnDef="_">
//             <th mat-header-cell *matHeaderCellDef></th>
//             <td mat-cell *matCellDef="let element">
//               <button (click)="eliminarProducto(element)" color="warn" mat-icon-button [iconSize]=16 class="red-300">
//                 <mat-icon svgIcon="heroicons_outline:trash"></mat-icon>
//               </button> </td>
//           </ng-container>
//             <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
//             <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
//           </table>
//         </div>
//       </div>
//     </div>
//     <!-- end Grid -->
//   </div>
//   <!-- END CONTENT -->

//   </div>

//   </mat-drawer-content>

// </mat-drawer-container>

// </div>

//sidebar
// <div class="container px-4">
//   <form class="mt-6" [formGroup]="customerForm" (ngSubmit)="selectedCustomer()" >
//     <mat-form-field  class="w-full">
//       <mat-label class="text-xl font-bold" >Seleccione un cliente</mat-label>
//       <mat-select formControlName="user" name="customer">
//         <mat-option *ngFor="let customer of customers$ " [value]="customer">
//           {{customer.username}}
//         </mat-option>
//       </mat-select>
//     </mat-form-field>

//   <mat-form-field class="w-full">
//     <mat-label>Transporte</mat-label>
//     <textarea class="treo-mat-textarea" formControlName="transporte" name="transporte" matInput placeholder="transporte"></textarea>
//   </mat-form-field>

//   <mat-form-field class="w-full">
//     <mat-label>Mensaje adicional</mat-label>
//     <textarea class="treo-mat-textarea" formControlName="mensaje_adicional" name="mensaje_adicional" matInput placeholder="Transporte, Informacion extra"></textarea>
//   </mat-form-field>
//     <!-- Informacion Cliente Seleccionado -->
//   <div *ngIf="customerSelected"  class="bg-white shadow overflow-hidden sm:rounded-lg">
//     <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
//       <dl class="sm:divide-y sm:divide-gray-200">
//         <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//           <dt class="text-sm font-medium text-gray-500">
//           Cliente
//           </dt>
//           <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//             {{customerSelected.username}}
//           </dd>
//         </div>
//         <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//           <dt class="text-sm font-medium text-gray-500">
//             Rut
//           </dt>
//           <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//           {{customerSelected.rut_empresa}}
//           </dd>
//         </div>
//         <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//           <dt class="text-sm font-medium text-gray-500">
//             Email
//           </dt>
//           <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//             {{customerSelected.email}}
//           </dd>
//         </div>
//         <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//           <dt class="text-sm font-medium text-gray-500">
//             telefono
//           </dt>
//           <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//             {{customerSelected.telefono}}
//           </dd>
//         </div>
//         <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//           <dt class="text-sm font-medium text-gray-500">
//             Direccion
//           </dt>
//           <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//             <span>
//               Region:
//               {{customerSelected.region}}
//               </span>
//               Comuna:
//               {{customerSelected.comuna}}
//           </dd>
//         </div>
//       </dl>
//     </div>
//   </div>
//   <div class="flex mt-6">
//     <button [disabled]="customerForm.invalid" mat-raised-button color="primary" class="w-full">Seleccionar Cliente</button>
//   </div>
// </form>





// </div>
