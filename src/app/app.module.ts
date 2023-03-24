import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectivesPageComponent } from './pages/attribute-directives-page/attribute-directives-page.component';
import { StructuralDirectivesPageComponent } from './pages/structural-directives-page/structural-directives-page.component';

// ngModel kullanmak için FormsModule importa tanımlamak gerekir.

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesPageComponent,
    StructuralDirectivesPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  // eğer kendi yada dışarıdan yüklenen bir paket varsa import kısmına ilgili module ekleriz.
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
