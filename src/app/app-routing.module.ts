import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesPageComponent } from './pages/attribute-directives-page/attribute-directives-page.component';
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
];

// biz uygulamadaki componentlere ait linkleri routes dizisine tanımlarız.
// useRoutes react react-router-dom

// "@angular/router": "^15.1.0", routing yönetimi sağlanıyor
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
