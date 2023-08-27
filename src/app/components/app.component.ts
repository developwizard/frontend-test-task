import {Component, OnInit} from '@angular/core';
import {DataService, TestData} from "../services/data.service";

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

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => this.data = data);
  }
}
