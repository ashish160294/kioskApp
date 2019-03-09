import { Component, OnInit } from '@angular/core';
import { MyBetsService } from '../services/bets.service';
import { BetsDataSource } from '../services/data-source.service';
import { UserDetailsService } from '../user-details.service';

@Component({
selector: 'app-my-bets',
templateUrl: './my-bets.component.html',
styleUrls: ['./my-bets.component.css']
})

export class MyBetsComponent implements OnInit {
    dataSource: BetsDataSource;
    displayedColumns = ["img","amount", "horse", "race"];

    constructor(private myBetsService: MyBetsService, private userDetailService: UserDetailsService) {}

    ngOnInit() {
        this.userDetailService.userObservable.subscribe((data) => {
            console.log(data);
        });
        this.dataSource = new BetsDataSource(this.myBetsService);
        this.dataSource.loadLessons(1);
    }
}
