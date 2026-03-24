import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-longterm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './longterm.component.html',
  styleUrls: ['./longterm.component.css']
})
export class LongtermComponent implements OnInit {
  images: { url: string, id: number }[] = [
    { url: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/1369847707_4085_memory-1.jpg?itok=aZRKeJXR", id: 1 },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8a2YKUyrUrEEkYxECnP4zI3LXpfEhhEZhg&usqp=CAU", id: 2 },
    { url: "https://easyscienceforkids.com/wp-content/uploads/2018/04/Memory-facts-18-4-1-758x635.jpg", id: 3 }
  ];

  paragraphs: { text: string, id: number }[] = [
    { text: "a memoria a largo plazo se puede definir como el mecanismo cerebral que nos permite codificar y retener una cantidad prácticamente ilimitada de información durante un periodo largo de tiempo. Los recuerdos que almacenamos en la memoria a largo plazo pueden durar desde unos segundos hasta varios años.", id: 1 },
    { text: "a memoria a largo plazo resulta un elemento clave para realizar nuestras tareas cotidianas sin errores y de forma autónoma. Este tipo de memoria hace referencia a la capacidad del cerebro para almacenar hechos, conocimientos o destrezas y recuperar más tarde esos recuerdos. La memoria a largo plazo es una capacidad muy amplia y compleja que implica una gran cantidad de estructuras cerebrales. Por esto mismo, es muy sensible al daño cerebral. Afortunadamente, la práctica y el entrenamiento cognitivo puede mejorar esta importante función cognitiva.", id: 2 },
    { text: "n programa en entrenamiento cerebral permite activar y fortalecer nuestra memoria y otras importantes capacidades cognitivas. Los juegos mentales estimulan determinados patrones de activación neuronal. La activación repetida de estos patrones cognitivos puede ayudar a fortalecer las conexiones neuronales implicadas en la memoria y establecer nuevas sinapsis capaces de reorganizar y/o recuperar funciones cognitivas más débiles o dañadas.", id: 3 }
  ];

  letter: { text: string, id: number }[] = [
    { text: "L", id: 1 },
    { text: "L", id: 2 },
    { text: "U", id: 3 }

  ];

  currentIndex: number = 0;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); 
  }

  getCurrentImage(): { url: string, id: number } {
    return this.images[this.currentIndex];
  }

  getCurrentParagraph(): { text: string, id: number } {
    return this.paragraphs[this.currentIndex];
  }

  getcurrentLetter(): { text: string, id: number } {
    return this.letter[this.currentIndex];
  }
}
