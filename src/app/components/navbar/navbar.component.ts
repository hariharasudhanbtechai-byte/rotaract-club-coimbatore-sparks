import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);
  protected readonly links = [
    { path: '/', label: 'Home' }, { path: '/about', label: 'About' }, { path: '/activities', label: 'Activities' },
    { path: '/events', label: 'Events' }, { path: '/gallery', label: 'Gallery' }, { path: '/team', label: 'Team' },
    { path: '/membership', label: 'Membership' }, { path: '/contact', label: 'Contact' },
  ];
  protected closeMenu(): void { this.menuOpen.set(false); }
}
