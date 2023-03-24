import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesPageComponent } from './pages/attribute-directives-page/attribute-directives-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { StructuralDirectivesPageComponent } from './pages/structural-directives-page/structural-directives-page.component';

const routes: Routes = [
  {
    path: 'attribute-directives', // bu path gelince aşağıdaki componente yönlendir
    component: AttributeDirectivesPageComponent,
  },
  {
    path: 'structural-directives',
    component: StructuralDirectivesPageComponent,
  },
  {
    path: '', // sayfa ilk yüklendiğinde app component bize HomePage componenti getirecek
    component: HomePageComponent,
  },
  {
    path: '**', // sayfa bulunamadı kısmını yakalamak için ** path en son routing path olarak kullanmalıyız.
    component: NotfoundPageComponent,
  },
];

// biz uygulamadaki componentlere ait linkleri routes dizisine tanımlarız.
// useRoutes react react-router-dom

// "@angular/router": "^15.1.0", routing yönetimi sağlanıyor
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
