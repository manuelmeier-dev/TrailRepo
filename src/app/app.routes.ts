import { Routes } from '@angular/router';
import {isAuthenticatedGuard} from './shared/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';

export const routes: Routes = [
    {path: 'auth', component: AuthComponent},
    {path: 'home', component: HomeComponent, canActivate: [isAuthenticatedGuard()]},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
