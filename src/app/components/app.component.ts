import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {DataService, TestData} from "../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';

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

  constructor(private activatedRoute: ActivatedRoute,
              private el: ElementRef,
              private dataService: DataService,
              private location: Location,
              private renderer: Renderer2,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchDescription = params['search'] ? params['search'] : '';
    });
    this.dataService.getData().subscribe(data => this.data = data);

    const htmlElement = this.el.nativeElement as HTMLElement;
    for (const tag of Array.from(htmlElement.getElementsByClassName("selected-toggle-button"))) {
      this.renderer.setStyle(tag.getElementsByClassName("mat-button-toggle-label-content")[0], 'line-height', '24px');
    }
  }

  onSearchChange() {
    if (this.searchDescription == '') {
      const url = this.router.createUrlTree([], {
        relativeTo: this.activatedRoute,
        queryParams: {search: null},
        queryParamsHandling: 'merge'
      }).toString()
      this.location.go(url);
    } else {
      const url = this.router.createUrlTree([], {
        relativeTo: this.activatedRoute,
        queryParams: {search: this.searchDescription}
      }).toString()
      this.location.go(url);
    }
  }
}
