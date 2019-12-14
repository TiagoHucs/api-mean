import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[];

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.service.posts().subscribe(
      res => {
        this.posts = res;
      }, err => {
        console.log(err.error);
      }
    )
  }

}