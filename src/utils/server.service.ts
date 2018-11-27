import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class ServerService {

    constructor(private http: Http) {}

    addServers (servers: any[]){
        console.log(servers);
        // todo: the data base url is fake
        return this.http.post('https://databaseUwantToConnectTo', servers);
    }
}