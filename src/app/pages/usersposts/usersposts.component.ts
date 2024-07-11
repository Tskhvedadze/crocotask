import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service'; // Adjust the import path as necessary
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usersposts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usersposts.component.html',
  styleUrls: ['./usersposts.component.css'],
})
export class UserspostsComponent implements OnInit {
  posts: any[] = [];
  postId: string | null = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.postId) {
      this.fetchPosts(this.postId);
    }
  }

  fetchPosts(id: string): void {
    this.postsService.getPostsByUserId(id).subscribe({
      next: (response) => {
        this.posts = response;
      },
      error: (err) => console.error('Error fetching posts:', err),
    });
  }
}
