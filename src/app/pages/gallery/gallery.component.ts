import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { gallery } from '../../data/gallery.data';
@Component({ selector: 'app-gallery', imports: [CtaBannerComponent], templateUrl: './gallery.component.html', styleUrl: './gallery.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class GalleryComponent { protected readonly gallery = gallery; }
