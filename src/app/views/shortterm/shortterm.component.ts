import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shortterm',
  templateUrl: './shortterm.component.html',
  imports: [CommonModule],
  styleUrls: ['./shortterm.component.css']
})
export class ShorttermComponent implements OnInit {
  images: { url: string, id: number }[] = [
    { url: "https://www.olympiabenefits.com/hubfs/Vega/Blog%20Pages/Psychology/What%20is%20memory.png", id: 1 },
    { url: "https://images.ctfassets.net/cnu0m8re1exe/uTkqQAbjpnnpceaY9UzLE/2d49aaee28ca31631c33a02ff89b437c/brainresearch.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill", id: 2 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ95HvxEmQ-GQBMSL48P-DpN445HLKgqG2EmJu57Fr8Ix4rw0mkf01iMh3Hew2gS3I9JI&usqp=CAU", id: 3 },
    { url: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/1369847707_4085_memory-1.jpg?itok=aZRKeJXR", id: 4 },
    { url: "https://media.npr.org/assets/img/2023/08/07/gettyimages-1440469647-db0c65c135844b757df227afebfa240fd400630c.jpg", id: 5 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8a2YKUyrUrEEkYxECnP4zI3LXpfEhhEZhg&usqp=CAU", id: 6 },
    { url: "https://mindworks.org/app/uploads/2023/06/Does-Meditation-Improve-memory.jpg", id: 7 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERe-RZMXEfeALxm-QfjABDm_b2ggQEBJdng&usqp=CAU", id: 8 },
    { url: "https://images.theconversation.com/files/171522/original/file-20170530-23699-itx0un.jpg?ixlib=rb-1.1.0&rect=0%2C181%2C2987%2C2163&q=45&auto=format&w=926&fit=clip", id: 9 }
  ];

  texts: string[] = [
    "Memoria Corto Plazo",
    "La memoria a corto plazo es la capacidad para almacenar, mantener y recuperar cierta cantidad de información durante un corto periodo de tiempo.",
    "Cuando la información pasa a estar disponible por un tiempo indefinido, es cuando hablamos de memoria a largo plazo"
  ];

  currentIndex: number = 0;

  ngOnInit(): void {}

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.texts.length;
  }

  previous(): void {
    this.currentIndex = (this.currentIndex - 1 + this.texts.length) % this.texts.length;
  }

  getCurrentImages(): { url: string, id: number }[] {
    return this.images.slice(this.currentIndex * 3, this.currentIndex * 3 + 3);
  }

  getCurrentText(): string {
    return this.texts[this.currentIndex];
  }
}