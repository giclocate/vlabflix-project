import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {

  navList = ["Catálogo", "Minha Maratona", "Geradores", "Maratonas Salvas"]  

  onNotificationClick() {
    console.log("Notificações clicadas");
  }

  onProfileAction(action: string) {
    console.log("Ação do perfil:", action);
  }
}
