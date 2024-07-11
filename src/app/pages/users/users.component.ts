import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../services/user.model';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: Users[] = [];
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUser().subscribe({
      next: (users) => {
        console.log(users);

        this.users = users;
      },
    });
  }
}
