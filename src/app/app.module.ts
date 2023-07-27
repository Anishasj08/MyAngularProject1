import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { header } from './header/header.component';
import { searchbar } from './searchbar/search.component';
import { classmap } from './map/map.component';
import { form } from './login/login.component';
import { footer } from './footer/footer.component';
import { feedback } from './feedback/feedback.component';
import { list } from './list/list.components';
import { userprofile } from './userprofile/userprofile.component';
import { sale } from './sale/sale.component';
import { slidebar } from './slidebar/slidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    header,
   searchbar,
   classmap,
   form,
   footer,
   feedback,
   list,
   userprofile,
   sale,
   slidebar,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
