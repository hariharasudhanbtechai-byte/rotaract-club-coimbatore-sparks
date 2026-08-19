import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EventCard } from '../../components/event-card/event-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { events } from '../../data/events.data';
@Component({ selector: 'app-events', imports: [EventCard, CtaBannerComponent], templateUrl: './events.component.html', styleUrl: './events.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class EventsComponent { protected readonly events = events; }
