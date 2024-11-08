import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environment';
import { NotFoundComponent } from 'projects/shell/not-found/not-found.component';
import { AuthGuard } from 'auth-guards';

const routes: Routes = [
  {
    path: 'movies',
    canActivate: [AuthGuard],
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.movieMf,
        exposedModule: './Module',
      }).then((m) => m.MoviesMfModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.authMf,
        exposedModule: './Module',
      }).then((m) => m.AuthModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: '**', component: NotFoundComponent }, // Wildcard route for unmatched paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FontAwesomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
