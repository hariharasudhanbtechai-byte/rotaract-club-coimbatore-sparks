import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { achievements } from '../../data/achievements.data';
@Component({ selector: 'app-achievements', imports: [CtaBannerComponent], templateUrl: './achievements.component.html', styleUrl: './achievements.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class AchievementsComponent { protected readonly achievements = achievements; }
