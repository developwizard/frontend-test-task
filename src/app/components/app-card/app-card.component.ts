import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule, UpperCasePipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

/**
 * This component displays card with icon, title and description
 */
@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css'],
  imports: [
    CommonModule,
    MatButtonModule,
    UpperCasePipe
  ],
  standalone: true
})
export class AppCardComponent implements OnInit {
  @Input()
  id: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  blocksCount: number = 0;
  blockCountText: string = '';
  blockIconSrc: string = '';
  @Input()
  selected: boolean = false;
  @Output() selectionChanges = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.setBlockCountIconAndText(this.blocksCount);
  }

  setBlockCountIconAndText(blockCount: number) {
    this.blockCountText = blockCount == 1
      ? blockCount + ' block'
      : blockCount + ' blocks';
    this.blockIconSrc = this.getBlockIconSrc(blockCount);
  }

  getBlockIconSrc(blockCount: number): string {
    switch (blockCount) {
      case 1:
        return 'assets/svg/1.svg';
      case 2:
        return 'assets/svg/2.svg';
      case 3:
        return 'assets/svg/3.svg';
      default:
        return 'assets/svg/4.svg';
    }
  }

  onSelectionChanges(selected: boolean) {
    this.selected = selected;
    this.selectionChanges.emit(selected);
  }
}
