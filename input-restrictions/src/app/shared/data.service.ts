import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MasterData } from "./masterdata.model";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class DataService {

    constructor(private http : HttpClient) {}

    GetMasterData () : Observable<MasterData>{
        return this.http.get<MasterData>(environment.api_url + '/student/masterdata');
    }

}