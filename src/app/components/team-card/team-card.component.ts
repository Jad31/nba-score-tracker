import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { HighlightResultDirective } from 'src/app/directives/highlight-result.directive';
import { NbaGamesResult } from 'src/app/models/nba-game.model';
import { ConferencePipe } from 'src/app/pipes/conference.pipe';
import { WinLossPipe } from 'src/app/pipes/win-loss.pipe';
import { ModalComponent } from '../modal/modal.component';
import { µTeamCardRemoveButtonClicked } from './index.actions';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    WinLossPipe,
    HighlightResultDirective,
    ConferencePipe,
    ModalComponent,
  ],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamCardComponent {
  @Input() teamResult: NbaGamesResult | undefined;
  showModal: boolean = false;

  constructor(private store: Store) {}

  removeTeamResult(uuid: string | undefined): void {
    if (uuid) {
      this.store.dispatch(µTeamCardRemoveButtonClicked({ cfgs: { uuid } }));
    }
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
