import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class MyBetsService {

    constructor(private http:HttpClient) {}

    findLessons(
        betId:number, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<any[]> {

        return this.http.get('../../assets/data.json', {
            params: new HttpParams()
                .set('betId', betId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res["payload"])
        );
    }
}