import { Component, EventEmitter, Output } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-filter-panel",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./filter-panel.component.html",
  styleUrls: ["./filter-panel.component.scss"],
})
export class FilterPanelComponent {
  @Output() filtersChanged = new EventEmitter<any>()

  filters = {
    query: "",
    genre: "all",
    year: "all",
    rating: "all",
    duration: "all",
  }

  genres = [
    "Ação",
    "Aventura",
    "Comédia",
    "Drama",
    "Ficção Científica",
    "Terror",
    "Romance",
    "Thriller",
    "Animação",
    "Documentário",
  ]

  years = Array.from({ length: 30 }, (_, i) => 2024 - i)

  ratings = ["9.0+", "8.0+", "7.0+", "6.0+", "5.0+", "4.0+", "3.0+", "2.0+", "1.0+"]

  durations = ["Menos de 90 min", "90-120 min", "120-150 min", "150-180 min", "Mais de 180 min"]

  toggleFilters(): void {
    
  }

  updateFilters() {
    this.filtersChanged.emit(this.filters)
  }

  clearFilters() {
    this.filters = {
      query: "",
      genre: "all",
      year: "all",
      rating: "all",
      duration: "all",
    }
    this.updateFilters()
  }
}
