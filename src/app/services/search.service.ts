import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class SearchService {
  private searchSubject$: BehaviorSubject<string> = new BehaviorSubject('');
  private isSearchOnlySelectedSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  getSearchValue(): Observable<string> {
    return this.searchSubject$.asObservable();
  }
  setSearchValue(search: string) {
    this.searchSubject$.next(search);
  }
  getSearchOnlySelectedValue(): Observable<boolean> {
    return this.isSearchOnlySelectedSubject$.asObservable();
  }
  setSearchOnlySelectedValue(searchOnlySelected: boolean) {
    this.isSearchOnlySelectedSubject$.next(searchOnlySelected);
  }
}
