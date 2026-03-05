import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  template: '<h1>ID del Usuario: {{ id }}</h1>'
})
export class UserDetailComponent implements OnInit {
  id: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}