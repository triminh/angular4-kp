import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  isHighlight = false;
  evenStyle = { color: 'red', fontSize: '40px' };
  oddStyle = { color: 'black', fontSize: '20px' };
  currentClass = { circle: !this.isHighlight, square: this.isHighlight };
  constructor() { }

  ngOnInit() {
  }

 

}
