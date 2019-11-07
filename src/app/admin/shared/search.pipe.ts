import {Pipe, PipeTransform} from "@angular/core";
import {canReportError} from "rxjs/internal/util/canReportError";
import {Post} from "../../shared/interfaces";

@Pipe({
  name: 'searcPosts'
})
export class SearchPipe implements  PipeTransform{
  transform(posts: Post[], search = ''): Post[] {
    if(!search.trim()){
      return  posts
    }
    return  posts.filter( post => {
      return post.author.toLowerCase().includes(search.toLowerCase())
    })
  }

}
