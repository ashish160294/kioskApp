import { Component } from '@angular/core';
import { MyBetsService } from '../services/bets.service';
import { BetsDataSource } from '../services/data-source.service';

@Component({
selector: 'app-my-bets',
templateUrl: './my-bets.component.html',
styleUrls: ['./my-bets.component.css']
})

export class MyBetsComponent {
    dataSource: BetsDataSource;
    displayedColumns= ["img","amount", "horse", "race"];

    constructor(private myBetsService: MyBetsService) {}

    ngOnInit() {
        this.dataSource = new BetsDataSource(this.myBetsService);
        this.dataSource.loadLessons(1);
    }
}
