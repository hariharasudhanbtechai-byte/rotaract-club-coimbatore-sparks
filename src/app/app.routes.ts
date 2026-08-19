import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', title: 'Rotaract Club of Coimbatore Sparks', loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent) },
	{ path: 'about', title: 'About Us | Rotaract Club of Coimbatore Sparks', loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent) },
	{ path: 'team', title: 'Our Team | Rotaract Club of Coimbatore Sparks', loadComponent: () => import('./pages/team/team.component').then((m) => m.TeamComponent) },
	{ path: 'activities', title: 'Activities | Rotaract Club of Coimbatore Sparks', loadComponent: () => import('./pages/activities/activities.component').then((m) => m.ActivitiesComponent) },
	{ path: 'gallery', title: 'Gallery | Rotaract Club of Coimbatore Sparks', loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent) },
	{ path: 'achievements', title: 'Achievements | Rotaract Club of Coimbatore Sparks', loadComponent: () => import('./pages/achievements/achievements.component').then((m) => m.AchievementsComponent) },
	{ path: 'events', title: 'Events | Rotaract Club of Coimbatore Sparks', loadComponent: () => import('./pages/events/events.component').then((m) => m.EventsComponent) },
	{ path: 'membership', title: 'Membership | Rotaract Club of Coimbatore Sparks', loadComponent: () => import('./pages/membership/membership.component').then((m) => m.MembershipComponent) },
	{ path: 'contact', title: 'Contact | Rotaract Club of Coimbatore Sparks', loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent) },
	{ path: '**', redirectTo: '' },
];
