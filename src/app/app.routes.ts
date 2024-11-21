import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { isAuthenticatedGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: 'auth/login', component: LoginComponent},
    {path: 'auth/register', component: RegisterComponent},
    {path: 'home', component: HomeComponent, canActivate: [isAuthenticatedGuard]},
    {path: '', redirectTo: 'auth/login', pathMatch: 'full'}
];
