import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
selector: 'app-races',
templateUrl: './all-races.component.html',
styleUrls: ['./all-races.component.css']
})

export class AllRaceComponent {
    @Input() title: string;
    constructor(private router: Router) {
        this.title = "Champions Derby";
    }

    public cardClicked() {
        this.router.navigate(['/qrcode'])
    }
    
}
