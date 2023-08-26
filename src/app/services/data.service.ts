import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class DataService {
  constructor(private http: HttpClient) {
  }

  getData(): Observable<TestData[]> {
    return this.http.get<TestData[]>("assets/data.json")
  }
}

export interface TestData {
  id: string,
  address: string,
  title: string,
  description: string,
  blocksCount: number,
  selected?: boolean
}
