import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MyBetsService } from '../services/bets.service';

export class BetsDataSource implements DataSource<any> {

    private betsSubject = new BehaviorSubject<any[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private myBetsService: MyBetsService) {}

    connect(collectionViewer: CollectionViewer): Observable<any[]> {
        return this.betsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.betsSubject.complete();
        this.loadingSubject.complete();
    }

    loadLessons(betId: number, filter = '',
                sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

        this.loadingSubject.next(true);

        this.myBetsService.findLessons(betId, filter, sortDirection,
            pageIndex, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(lessons => this.betsSubject.next(lessons));
    }    
}