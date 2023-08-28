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
  @Input()
  selected: boolean = false;
  @Output() selectionChanges = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.setBlockCountText(this.blocksCount);
  }

  setBlockCountText(blockCount: number) {
      this.blockCountText = blockCount == 1
        ? blockCount + ' block'
        : blockCount + ' blocks';
  }

  onSelectionChanges(selected: boolean) {
    this.selected = selected;
    this.selectionChanges.emit(selected);
  }
}
