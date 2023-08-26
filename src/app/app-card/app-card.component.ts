import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, UpperCasePipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

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

  ngOnInit(): void {
    console.log(this.title);
    this.setBlockCountText(this.blocksCount);
  }

  setBlockCountText(blockCount: number) {
      this.blockCountText = blockCount == 1
        ? blockCount + ' block'
        : blockCount + ' blocks';
  }
}
