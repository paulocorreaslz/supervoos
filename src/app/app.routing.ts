import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdministracaoComponent } from './administracao/administracao.component';

const APP_ROUTES: Routes = [
    { path: 'login',  component: LoginComponent },
    { path: 'administracao',  component: AdministracaoComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
