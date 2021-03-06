import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { covid19APIService } from './services/covid19API.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProfileComponent } from './profile/profile.component';
import { JwtInterceptorService} from './services/HTTPInterceptor.service';
import { UsersListComponent } from './users-list/users-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RequestsComponent } from './requests/requests.component';
import { ShareDataService } from './services/shareData.service';
import { RequestsListComponent } from './requests-list/requests-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateRequestComponent } from './create-request/create-request.component';
import { RequestInfoComponent } from './request-info/request-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ToolbarComponent,
    ProfileComponent,
    UsersListComponent,
    UpdateUserComponent,
    PageNotFoundComponent,
    RequestsComponent,
    RequestsListComponent,
    CreateRequestComponent,
    RequestInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [covid19APIService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}, ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
