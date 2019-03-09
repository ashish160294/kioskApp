import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HorseData } from '../shared/horse.model';
import { FirebaseConnectionsService } from '../services/firebase-connections.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-race-horse-list',
  templateUrl: './race-horse-list.component.html',
  styleUrls: ['./race-horse-list.component.css']
})
export class RaceHorseListComponent implements OnInit {
  private raceId: number;
  public horseData: any[];
  public money: number;
  constructor(private route: ActivatedRoute, private firebaseConnectionService: FirebaseConnectionsService ) {
  }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      this.raceId = params.id;
    });
    const race = _.find(this.firebaseConnectionService.racesData, (data) => {
      return data.Id.toString() === this.raceId;
    });
    this.horseData = [];
    if (race && race.Participants) {
    const horses = Object.keys(race.Participants);
    this.firebaseConnectionService.fetchHorses().subscribe((horseData) => {
      horseData.forEach((horse) => {
        if (_.find(horses, Participanthorse => horse['Name'].toLowerCase() === Participanthorse.toLowerCase())) {
          console.log(horse);
          this.horseData.push(horse);
        }
      });
    });
    }
    // this.horseData.push({ "id": "1", "name": "Itallion Stallion", "jockeyName": "sharath", "raceWon": 3, "image": "image" });
    // this.horseData.push({ "id": "2", "name": "Itallion Stallion", "jockeyName": "sharath", "raceWon": 3, "image": "image" });
    // this.horseData.push({ "id": "3", "name": "Itallion Stallion", "jockeyName": "sharath", "raceWon": 3, "image": "image" });
    // this.horseData.push({ "id": "4", "name": "Itallion Stallion", "jockeyName": "sharath", "raceWon": 3, "image": "image" });
  }

}
