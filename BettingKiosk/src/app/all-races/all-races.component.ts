import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
selector: 'app-races',
templateUrl: './all-races.component.html',
styleUrls: ['./all-races.component.css']
})

export class AllRaceComponent {
    @Input() title: string;
    public date;
    public time;
    public races = [];
    constructor(private router: Router) {
        this.title = "Champions Derby";
        this.date = new Date();
        this.time = new Date().getHours();
        this.races = ['1', '2', '3', '4'];
    }

    public cardClicked() {
        this.router.navigate(['/qrcode'])
    }
    
}
