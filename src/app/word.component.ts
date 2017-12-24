import { Component } from '@angular/core';

@Component({
    templateUrl: './word.component.html',
    selector: 'app-word',
    styleUrls: [`./word.component.css`]
})

export class WordComponent {
    en = 'Hello';
    vn = 'Xin chào';
    imageUrl = 'https://cdn-images-1.medium.com/max/1600/1*nbJ41jD1-r2Oe6FsLjKaOg.png';
    forgot = false;
}