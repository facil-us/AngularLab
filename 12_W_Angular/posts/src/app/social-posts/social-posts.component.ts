import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit 
{
  TheList: Post[] =
  [
    {title: 'Grand Circus', thought: 'Grand Circus is very cool!'},
    {title: 'Instructor', thought: 'Jeff is the best instructor ever!'},
    {title: 'Asistant', thought: 'Daniel is the best asistant ever!'}
  ]

  newTitle: string = '';
  newThought: string = '';

  showAdd: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAddForm()
  {
    this.showAdd = true;
  }

  add()
  {
   // this.TheList.push
     this.TheList.unshift
    (
      {
        title: this.newTitle,
        thought: this.newThought
      }
    );

    this.newTitle = '';
    this.newThought = '';
    this.showAdd = false; 
  }

  deleteMe(whichPost: Post)
  {
    for (let i = 0; i <= this.TheList.length; i++)
    {
      if (this.TheList[i] == whichPost)
      {
        this.TheList.splice(i,1)
        return;
      }
    }
  }

}
