import { NgModule } from '@angular/core';
import { UserService } from 'app/core/user/user.service';

@NgModule({
    providers: [
        UserService
    ]
})
export class UserModule
{
}
