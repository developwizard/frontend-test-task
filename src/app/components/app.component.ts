import {Component, OnInit} from '@angular/core';
import {DataService, TestData} from "../services/data.service";
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'redlight-test-task';
  searchDescription: string = '';
  searchOnlySelected: boolean = false;
  data: TestData[] = [];

  constructor(private dataService: DataService,
              private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.searchService.getSearchValue().subscribe((inputVal: string) => {
      this.searchDescription = inputVal;
    });
    this.searchService.getSearchOnlySelectedValue().subscribe((searchOnlySelected: boolean) => {
      this.searchOnlySelected = searchOnlySelected;
    })

    this.dataService.getData().subscribe(data => this.data = data);
  }
}
