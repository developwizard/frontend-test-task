import {Component, ElementRef, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonModule, Location} from "@angular/common";
import {SearchService} from "../../services/search.service";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  searchDescription: string = '';
  searchOnlySelected: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private el: ElementRef,
              private location: Location,
              private renderer: Renderer2,
              private router: Router,
              private searchService: SearchService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchDescription = this.activatedRoute.snapshot.queryParams['search'] ? this.activatedRoute.snapshot.queryParams['search'] : '';
      this.onSearchChange();
    }, 0);

    const htmlElement = this.el.nativeElement as HTMLElement;
    for (const tag of Array.from(htmlElement.getElementsByClassName("selected-toggle-button"))) {
      this.renderer.setStyle(tag.getElementsByClassName("mat-button-toggle-label-content")[0], 'line-height', '24px');
    }
  }

  onSearchClear() {
    this.searchDescription = '';
    this.onSearchChange();
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

    this.searchService.setSearchValue(this.searchDescription);
  }

  onSearchOnlySelectedChange() {
    this.searchService.setSearchOnlySelectedValue(this.searchOnlySelected);
  }
}
