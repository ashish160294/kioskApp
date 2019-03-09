import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-race-horse-data',
  templateUrl: './race-horse-data.component.html',
  styleUrls: ['./race-horse-data.component.css']
})
export class RaceHorseDataComponent implements OnInit {

  @Input() horse;
  @Input() index;
  public money: number;
  constructor() { }

  ngOnInit() {
  }
  public placeBet(id: string) {
    console.log(id);
    console.log(this.money);
  }

}
