import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {PostsService} from "../../shared/posts.service";
import {Post} from "../../shared/interfaces";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
posts: Post[] = []
  pSub: Subscription;
  searchStr = '';

  constructor( private postsService: PostsService) { }


  ngOnInit() {
// this.add()
   this.pSub = this.postsService.getAll().subscribe( posts => {
      this.posts = posts;
    })
  }
  ngOnDestroy(): void {
    if(this.pSub) {
      this.pSub.unsubscribe()
    }
  }

//   add() {
// this.postsService.getAll().subscribe( post => {
//  this.posts = post;
// })
//   }
  remove(id: string) {
    console.log(id);


  }

}
