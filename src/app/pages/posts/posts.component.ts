import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AllPostsService } from '../../services/allposts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  constructor(private allPostsService: AllPostsService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.allPostsService.getAllPosts().subscribe({
      next: (response) => {
        this.posts = response;
      },
      error: (err) => console.error('Error fetching posts:', err),
    });
  }
}
