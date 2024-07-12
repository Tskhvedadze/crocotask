import { Routes } from '@angular/router';
import { UsersComponent } from './shared/users/users.component';
import { UserspostsComponent } from './pages/usersposts/usersposts.component';
import { PostsComponent } from './pages/posts/posts.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TodosComponent } from './pages/todos/todos.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'usersUniquePosts/:id', component: UserspostsComponent },
  { path: 'usersTodos/:id', component: TodosComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersPageComponent },
];
