import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CustomerResolver } from './resolvers/customer.resolver';
import { CustomerByIdResolver } from './resolvers/customer-by-id.resolver';
import { RegionsResolver } from './resolvers/regions.resolver';

const routes: Routes = [{
  path: '',
  component: CustomersComponent,
  children: [
    { path: '', component: ListComponent ,
      resolve: {
        customer: CustomerResolver
      },
        children: [
          { path: ':id', component: DetailsComponent,
            resolve:{
              customerID: CustomerByIdResolver,
              regions: RegionsResolver
            }
          },
          { path :'create', component: DetailsComponent,
            resolve: {
              regions: RegionsResolver
            } 
          }
        ]}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
