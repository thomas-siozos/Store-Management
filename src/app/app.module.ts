import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableListComponent } from './table-list/table-list.component';
import { AddDialogComponent } from './table-list/dialog/add-dialog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NewTableComponent } from './new-table/new-table.component';
import { ProductsComponent } from './products/products.component';
import { DialogComponent } from './products/dialog/dialog.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AuthGuard } from './auth/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableListComponent,
    AddDialogComponent,
    NewTableComponent,
    ProductsComponent,
    DialogComponent,
    AuthComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    ToastrModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
