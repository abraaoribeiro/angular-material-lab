import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  count: number = 4;
  message:string = 'Hello';
  text: string = 'Add Message'
  messagens = [];
  
  constructor() { }

  ngOnInit() {
    this.count = this.messagens.length;
  }

  addMessage(){
    this.messagens.push(this.message);
    this.text = ''
    this.count = this.messagens.length;
  }



}
