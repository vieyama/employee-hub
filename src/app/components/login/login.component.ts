import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { BriefcaseConveyorBelt, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  readonly BriefcaseConveyorBelt = BriefcaseConveyorBelt;
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/employees']);
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return !!control && control.touched && control.invalid;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.errorMessage = '';

    const { username, password } = this.loginForm.value;

    this.authService.login({ username, password })
      .then(() => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/employees';
        this.router.navigate([returnUrl]);
      })
      .catch(error => {
        this.errorMessage = error.message;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
