import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Event } from '../../models/event.model';

@Component({ selector: 'app-event-card', imports: [RouterLink], templateUrl: './event-card.component.html', styleUrl: './event-card.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class EventCard { readonly event = input.required<Event>(); }
