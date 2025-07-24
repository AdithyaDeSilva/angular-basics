import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]); // Initialize a signal container. So angular will watch the changes of the value here and update the UI according to those changed value.
  imagePath = computed(() => 'assests/users/' + this.selectedUser().avatar); // Computed needs a function as a argument. Computed also creates a signal container object with the given values it will lookover the value that can be changed in the given function.

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.get;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]); // set a new value to the containarized value with signal.
  }
}
