import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
@Component({ selector: 'app-about', imports: [CtaBannerComponent], templateUrl: './about.component.html', styleUrl: './about.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class AboutComponent {}
