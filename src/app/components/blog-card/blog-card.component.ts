import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  blog: any = {}
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blog = this.blogService.getBlogPosts()
  }

}
