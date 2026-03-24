import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  imports: [CommonModule],
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  title: string = "Let's Play!";
  board: number[] = [];
  gridSize: number = 2;
  showNumbers: boolean = true;
  userSequence: number[] = [];
  correctSequence: number[] = [];
  attempts: number = 0;
  maxAttempts: number = 3;
  gameOver: boolean = false;
  round: number = 1;

  ngOnInit(): void {
    this.initializeBoard();
  }

  initializeBoard(): void {
    switch (this.round) {
      case 1:
        this.gridSize = 2;
        break;
      case 2:
        this.gridSize = 3;
        break;
      case 3:
        this.gridSize = 4;
        break;
    }

    const totalCells = this.gridSize * (this.round === 3 ? 3 : this.gridSize);
    this.board = Array.from({ length: totalCells }, (_, i) => i + 1);
    this.correctSequence = [...this.board];
    this.shuffleBoard();
  }

  shuffleBoard(displayTime: number = 3000): void {
    for (let i = this.board.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.board[i], this.board[j]] = [this.board[j], this.board[i]];
    }
    this.showNumbers = true;
    setTimeout(() => {
      this.showNumbers = false;
    }, displayTime);
  }

  nextRound(): void {
    if (this.round < 3) {
      this.round++;
      this.resetGame(false);
    } else {
      this.title = 'enhorabuena!';
      this.gameOver = true;
    }
  }

  getBoardRows(): number[][] {
    return Array.from({ length: Math.ceil(this.board.length / this.gridSize) }, (_, i) =>
      this.board.slice(i * this.gridSize, (i + 1) * this.gridSize)
    );
  }

  handleClick(index: number): void {
    if (this.gameOver || this.showNumbers) return;

    const expectedNumber = this.correctSequence[this.userSequence.length];
    if (this.board[index] === expectedNumber) {
      this.userSequence.push(this.board[index]);
      if (this.userSequence.length === this.correctSequence.length) {
        if (this.round < 3) {
          this.title = 'Ronda completada, a por la siguiente!';
          setTimeout(() => this.nextRound(), 2000);
        } else {
          this.title = 'has ganado!';
          this.gameOver = true;
        }
      }
    } else {
      this.attempts++;
      if (this.attempts >= this.maxAttempts) {
        this.gameOver = true;
        this.title = 'has perdido!';
      }
    }
  }

  resetGame(resetRound: boolean = true): void {
    this.attempts = 0;
    this.userSequence = [];
    this.gameOver = false;
    this.title = "juguemos!";
    if (resetRound) {
      this.round = 1;
    }
    this.initializeBoard();
  }
}



