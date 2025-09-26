import { Component, Input, Output, EventEmitter } from "@angular/core"
import { CommonModule } from '@angular/common';

export interface Movie {
  id: number
  title: string
  poster: string
  genre: string
  year?: number
  rating?: number
  type: "movie" | "series"
}

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class MovieCardComponent {
  @Input() movie!: Movie
  @Output() addToMarathon = new EventEmitter<Movie>()

  onAddToMarathon(): void {
    this.addToMarathon.emit(this.movie)
  }

  onCardClick(): void {
    // Handle card click - could navigate to details
    console.log("Card clicked:", this.movie.title)
  }
}
