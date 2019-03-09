import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseConnectionsService } from '../services/firebase-connections.service';

@Component({
selector: 'app-races',
templateUrl: './all-races.component.html',
styleUrls: ['./all-races.component.css']
})

export class AllRaceComponent implements OnInit {
    @Input() title: string;
    public date;
    public time;
    public races = [];
    constructor(private router: Router, private firebaseConnectionService: FirebaseConnectionsService) {

    }
    ngOnInit() {
        this.firebaseConnectionService.getRacesList().subscribe((data) => {
            data.forEach(element => {
                const race = {
                    title: element.Name,
                    date: element.Date,
                    time: element.Time,
                    id: element.Id,
                    description: element.Description
                };
                this.races.push(race);
            });
        });
    }

    public cardClicked(race) {
        this.router.navigate([`nav/horserace/${race.id}`]);
    }
}
