import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;

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

export class Post{

}
