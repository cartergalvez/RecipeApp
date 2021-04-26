import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-btn',
  templateUrl: './favorite-btn.component.html',
  styleUrls: ['./favorite-btn.component.scss']
})
export class FavoriteBtnComponent implements OnInit {
  constructor() { }
  @Input() klass: string;
  @Input() btnText: string;
  ngOnInit(): void {
  }

}
