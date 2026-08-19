import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-cta-banner', imports: [RouterLink], templateUrl: './cta-banner.component.html', styleUrl: './cta-banner.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class CtaBannerComponent {}
