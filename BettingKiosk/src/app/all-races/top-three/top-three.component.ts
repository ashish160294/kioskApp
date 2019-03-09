import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
selector: 'app-top',
templateUrl: './top-three.component.html',
styleUrls: ['./top-three.component.css']
})

export class TopThreeHorsesComponent {
    @Input() title: string;
    public date;
    public time;
    public horses = [];
    constructor(private router: Router) {
        this.title = "Champions Derby";
        this.date = new Date();
        this.time = new Date().getHours();
        this.horses = [
            {title: 'Rank 1'},
            {title: 'Rank 2'},
            {title: 'Rank 3'}
        ];
    }
    
}
