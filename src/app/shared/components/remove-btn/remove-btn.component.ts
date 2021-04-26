import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.scss']
})
export class RemoveBtnComponent implements OnInit {
  constructor() { }
  @Input() klass: string;
  @Input() btnRText:string;
  ngOnInit(): void {
  }

}
