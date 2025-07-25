import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string; // Older way instead of signals. accepts input data from the parent component
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();  //creates a EveneEmitter object, outputs a value from the componen. 
  // For extra type safety we can add GENERIC type for the emmiting object

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.name);
  }
}
