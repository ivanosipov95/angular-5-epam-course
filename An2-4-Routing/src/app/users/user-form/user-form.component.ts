import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DialogService, CanComponentDeactivate} from './../../shared';

// rxjs
import {switchMap} from 'rxjs/operators';

import {User} from '../models/user.model';
import {UserArrayService} from '../services/user-array.service';

@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit, CanComponentDeactivate {
  user: User;
  originalUser: User;

  constructor(private userArrayService: UserArrayService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogService: DialogService) {
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const flags = Object.keys(this.originalUser).map(key => {
      if (this.originalUser[key] === this.user[key]) {
        return true;
      }
      return false;
    });

    if (flags.every(el => el)) {
      return true;
    }

    return this.dialogService.confirm('Discard changes?');
  }


  ngOnInit(): void {
    this.user = new User(null, '', '');

    this.route.data.subscribe(data => {
      this.user = {...data.user};
      this.originalUser = {...data.user};
    });

    // // we should recreate component because this code runs only once
    // const id = +this.route.snapshot.paramMap.get('userID');
    // this.userArrayService. getUser(id)
    //   .subscribe(
    //     user => {
    //       this.user = {...user};
    //       this.originalUser = {...user};
    //     },
    //     err => console.log(err)
    //   );
  }

  saveUser() {
    const user = {...this.user};

    if (user.id) {
      this.userArrayService.updateUser(user);
      this.router.navigate(['/users', {editedUserID: user.id}]);
    } else {
      this.userArrayService.addUser(user);
      this.goBack();
    }
    this.originalUser = {...this.user};
  }

  goBack() {
    this.router.navigate(['./../../'], {relativeTo: this.route});
  }
}
