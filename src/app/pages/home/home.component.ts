import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeading } from '../../components/section-heading/section-heading.component';
import { ProjectCard } from '../../components/project-card/project-card.component';
import { EventCard } from '../../components/event-card/event-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { projects } from '../../data/projects.data';
import { events } from '../../data/events.data';

@Component({ selector: 'app-home', imports: [RouterLink, SectionHeading, ProjectCard, EventCard, CtaBannerComponent], templateUrl: './home.component.html', styleUrl: './home.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class HomeComponent {
  protected readonly stats = [{ value: '453+', label: 'Community moments' }, { value: '50+', label: 'Service initiatives' }, { value: '100+', label: 'Volunteers' }, { value: '10+', label: 'Years of impact' }];
  protected readonly activities = [{ title: 'Community service', icon: 'bi-heart-pulse', copy: 'Creating meaningful change through hands-on community initiatives.' }, { title: 'Youth leadership', icon: 'bi-lightning-charge', copy: 'Building confident young leaders through collaboration and service.' }, { title: 'Events & experiences', icon: 'bi-stars', copy: 'Bringing people together through memorable cultural experiences.' }, { title: 'Social impact', icon: 'bi-globe2', copy: 'Using creativity and collective action to address real needs.' }];
  protected readonly featuredProjects = projects.slice(0, 3);
  protected readonly upcomingEvents = events.filter((event) => event.isUpcoming);
}
