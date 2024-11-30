import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { RegisterComponent } from './pages/auth/components/register/register.component';
import { isAuthenticatedGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';

export const routes: Routes = [
    {path: 'auth', component: AuthComponent},
    {path: 'home', component: HomeComponent, canActivate: [isAuthenticatedGuard]},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
