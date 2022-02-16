import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

    images: { random: string; picture: string; }[] = []; 
    responsiveOptions;

    constructor() {
        this.responsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 3
        }];
    }

    ngOnInit(): void {
        this.images = [
            {random: 'Random', picture: 'https://picsum.photos/id/944/900/500'},
            {random: 'Samoa', picture: 'https://picsum.photos/id/1011/900/500'},
            {random: 'Tonga', picture: 'https://picsum.photos/id/984/900/500'},
            {random: 'Cook Island', picture: 'https://picsum.photos/id/944/900/500'},
            {random: 'Niue', picture: 'https://picsum.photos/id/1011/900/500'},
            {random: 'American Samoa', picture: 'https://picsum.photos/id/984/900/500'}
        ];
    }

}
