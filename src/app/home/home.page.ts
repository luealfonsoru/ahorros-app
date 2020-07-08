import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userData:any = {}
  videos:any = {}
  blog:any = {}
  currentVideoIndex = 0

  constructor(private userService: UserService, private blogService: BlogService) { }

  changePage(index){
    this.currentVideoIndex = index
  }
  ngOnInit() {
    this.userData = this.userService.getUserData()
    this.videos = this.blogService.getVideoPosts()
    this.blog = this.blogService.getBlogPosts()
  }

}
