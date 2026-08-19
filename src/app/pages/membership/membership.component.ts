import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
@Component({ selector: 'app-membership', imports: [RouterLink, CtaBannerComponent], templateUrl: './membership.component.html', styleUrl: './membership.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class MembershipComponent {}
