import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todos } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  todoId: string | null = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: Todos
  ) {}

  ngOnInit(): void {
    this.todoId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.todoId) {
      this.fetchPosts(this.todoId);
    }
  }

  fetchPosts(id: string): void {
    this.postsService.getPostsByUserId(id).subscribe({
      next: (response) => {
        this.todos = response;
      },
      error: (err) => console.error('Error fetching posts:', err),
    });
  }
}
