import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({ selector: 'app-contact', imports: [ReactiveFormsModule, CtaBannerComponent], templateUrl: './contact.component.html', styleUrl: './contact.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly form = this.fb.nonNullable.group({ name: ['', Validators.required], email: ['', [Validators.required, Validators.email]], phone: [''], subject: ['', Validators.required], message: ['', [Validators.required, Validators.minLength(10)]] });
  protected sent = false;
  protected submit(): void { this.form.markAllAsTouched(); if (this.form.valid) this.sent = true; }
}
