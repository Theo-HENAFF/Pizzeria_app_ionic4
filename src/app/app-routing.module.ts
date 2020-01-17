import { NgModule} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'adminpanel', loadChildren: './adminpanel/adminpanel.module#AdminpanelPageModule' },
  { path: 'gestion', loadChildren: './gestion/gestion.module#GestionPageModule' },
  { path: 'carte', loadChildren: './carte/carte.module#CartePageModule' },
  { path: 'panier', loadChildren: './panier/panier.module#PanierPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

