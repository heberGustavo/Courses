import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ParentDataComponent } from "./components/parent-data/parent-data.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ParentDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
  userName: string = "Heber Gustavo";
  userEmail: string = "heber@teste.com";
  userFullData = {
    name: this.userName,
    email: this.userEmail,
    role: "Admin",
    job: "Dev Especialista ||"
  }
}
