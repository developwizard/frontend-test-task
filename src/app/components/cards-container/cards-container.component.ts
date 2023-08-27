import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {DataService, TestData} from "../../services/data.service";
import {SearchService} from "../../services/search.service";
import {FilterPipe} from "../../pipes/filter.pipe";
import {AppCardComponent} from "../app-card/app-card.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css'],
  standalone: true,
  imports: [
    AppCardComponent,
    CommonModule,
    FilterPipe,
    ScrollingModule
  ],
  encapsulation: ViewEncapsulation.None
})
export class CardsContainerComponent implements OnInit {
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
    });
    this.dataService.getData().subscribe(data => this.data = data);
  }
}
