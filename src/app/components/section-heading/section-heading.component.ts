import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({ selector: 'app-section-heading', templateUrl: './section-heading.component.html', styleUrl: './section-heading.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class SectionHeading { readonly eyebrow = input(''); readonly title = input(''); readonly copy = input(''); readonly light = input(false); }
