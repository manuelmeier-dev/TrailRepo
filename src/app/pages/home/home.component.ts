import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    imports: [ReactiveFormsModule],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
