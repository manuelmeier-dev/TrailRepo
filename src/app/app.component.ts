import {ChangeDetectionStrategy, Component, computed, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {AuthService} from './shared/services/auth/auth.service';
import {navigatorLock} from '@supabase/supabase-js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  #router = inject(Router);

  ngOnInit() {
    this.authService.authChanges((event, session) => {
      console.log(event, session);
      if (event === 'SIGNED_IN' && session) {
        this.authService.currentUser.set({email: session.user.email!});
      } else if (event === 'SIGNED_OUT') {
        this.authService.currentUser.set(null);
      }
    });
  }

  logout() {
    this.authService.logout().then((res) => {
      if (res) {
        this.#router.navigate(['auth']);
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}
