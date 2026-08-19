import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { projects } from '../../data/projects.data';

@Component({
  selector: 'app-activities',
  imports: [ProjectCard, CtaBannerComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesComponent {
  protected readonly filters = ['All', 'Community', 'Education', 'Environment', 'Youth', 'Social', 'Events'];
  protected readonly activeFilter = signal('All');
  protected readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    return filter === 'All' ? projects : projects.filter((project) => project.category === filter);
  });
  protected setFilter(filter: string): void { this.activeFilter.set(filter); }
}
