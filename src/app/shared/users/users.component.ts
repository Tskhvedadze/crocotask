import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../services/user.model';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  router = new Router();
  users: Users[] = [];
  constructor(private userService: UsersService) {}

  usersUniquePosts(userId: number) {
    this.router.navigate(['usersUniquePosts', userId]);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUser().subscribe({
      next: (users) => {
        this.users = users;
      },
    });
  }
}
