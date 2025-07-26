import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model'; 

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>(); //creates a EveneEmitter object, outputs a value from the componen.
  // For extra type safety we can add GENERIC type for the emmiting object

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
