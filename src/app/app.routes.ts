import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UserspostsComponent } from './pages/usersposts/usersposts.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'usersUniquePosts/:id', component: UserspostsComponent },
];
