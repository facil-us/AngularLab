import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit 
{
  @Input() ThePost: Post =
  {
    title: 'GrandCircus',
    thought: 'They do really great job. Congrats!'
  }

  editMode: boolean = false;
  editTitle: string = '';
  editThought: string = '';

  @Output() remove: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  edit()
  {
    this.editMode = true;
    this.editTitle = this.ThePost.title;
    this.editThought = this.ThePost.thought;
  }

  cancel()
  {
    this.editMode = false;
  }

  save()
  {
    this.ThePost.title = this.editTitle;
    this.ThePost.thought = this.editThought;
    this.editMode = false;
  }

  delete()
  {
    this.remove.emit(this.ThePost);
  }

}
