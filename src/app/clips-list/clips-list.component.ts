import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clips-list',
  templateUrl: './clips-list.component.html',
  styleUrls: ['./clips-list.component.scss'],
})
export class ClipsListComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    // create event listener
    window.addEventListener('scroll', this.handleScroll);
  }
  ngOnDestroy(): void {
    // destroy event listener to prevent memory leak
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // get the sizes of the document element
    const { scrollTop, offsetHeight } = document.documentElement;
    const { innerHeight } = window;

    // verify if the user scrolled to the bottom enough to make start new queries to the Firebase
    const bottomOfWindow = Math.floor(scrollTop) + innerHeight === offsetHeight;

    if (bottomOfWindow) console.log('bottom of window');
  };
}
