import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Хочу выучить ангуляр компоненты', text: 'Я всё ещё учу ангуляр компоненты', id:1},
    {title: 'Как я потратил 2 часа на непонятно что', text: 'Далее будет замес', id:2},
  ]

  updatePost(post: Post){
    this.posts.unshift(post);
    console.log('New post',post)
  }
}
