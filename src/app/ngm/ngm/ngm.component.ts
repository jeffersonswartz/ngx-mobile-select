import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'ngm-select',
  templateUrl: './ngm.component.html',
  styleUrls: ['./ngm.component.css']
})
export class NgmComponent implements OnInit {

  @Input() placeholder;
  @Input() list;
  @Input() selected;
  @Input() property;


  text: any;
  isDropped: boolean;

  constructor(private eRef: ElementRef) { }

  ngOnInit() {
  }
  @HostListener('click')
  onclick() {
     if (this.isDropped) {
         this.isDropped  = false;
         this.isFullView = false;
     } else{
       this.open();
     }
  }

  isFullView = false;


  open() {
    this.isDropped = true;
  }

  select(item) {
    this.selected = item;
  }


  hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  }

}