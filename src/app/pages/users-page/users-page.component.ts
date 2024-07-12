import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AllUsersService } from '../../services/allusers.service';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent implements OnInit {
  users: any = [];

  constructor(private allUsersService: AllUsersService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.allUsersService.getAllPosts().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (err) => console.log('Error fetching users', err),
    });
  }
}
