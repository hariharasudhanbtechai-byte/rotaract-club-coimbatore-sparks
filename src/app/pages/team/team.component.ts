import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
@Component({ selector: 'app-team', imports: [CtaBannerComponent], templateUrl: './team.component.html', styleUrl: './team.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class TeamComponent {}
