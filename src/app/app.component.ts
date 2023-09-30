import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularHttpLernen';
  private user: any = {
    id: 1,
    name: 'juni Grah',
    username: 'juni234',
    email: 'admin@gmail.de',
    
  };
  ngOnInit(): void {
    this.onGetUsers();
    // this.onGetUser();
    //this.onCreateUser();
    //this.onUpdate();
    //this.onPatchUser();
    this.onDeleteUser();
  }
  constructor(private userService: UserService) {}
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    );
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done updating user')
    );
  }

  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done create user')
    );
  }

  onUpdate(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done UPdate user')
    );
  }
  onPatchUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done patching user')
    );
  }
  onDeleteUser(): void {
    this.userService.deleteUser(1).subscribe(
      (response) => console.log('Response from delete:',response),
      (error: any) => console.log(error),
      () => console.log('Done deleting user')
    );
  }
}
