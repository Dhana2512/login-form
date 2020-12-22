import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormFakeComponent } from './form-fake/form-fake.component';
import { TableComponent } from './table/table.component';
import { FormDirectiveDirective } from './form-directive.directive';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/table',
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormFakeComponent,
    TableComponent,
    FormDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
