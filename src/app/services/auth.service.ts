import { Injectable, signal } from '@angular/core';
import { LoginRequest, User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Use signals for reactive state management
  private currentUserSignal = signal<User | null>(null);

  // Mock user for demo purposes
  private mockUser: User = {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    token: 'mock-jwt-token'
  };

  constructor(private router: Router) {
    // Check if user is already logged in
    this.checkAuthState();
  }

  private checkAuthState(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSignal.set(JSON.parse(storedUser));
    }
  }

  get currentUser() {
    return this.currentUserSignal();
  }

  get isLoggedIn(): boolean {
    return !!this.currentUserSignal();
  }

  login(loginRequest: LoginRequest): Promise<User> {
    // Mock login - in a real app, you would call an API
    return new Promise((resolve, reject) => {
      // Simulate API delay
      setTimeout(() => {
        if (loginRequest.username === 'admin' && loginRequest.password === 'admin') {
          // Store user in localStorage
          localStorage.setItem('currentUser', JSON.stringify(this.mockUser));

          // Update signal state
          this.currentUserSignal.set(this.mockUser);

          resolve(this.mockUser);
        } else {
          reject(new Error('Invalid username or password'));
        }
      }, 800);
    });
  }

  logout(): void {
    // Clear localStorage
    localStorage.removeItem('currentUser');

    // Reset signal state
    this.currentUserSignal.set(null);

    // Navigate to login page
    this.router.navigate(['/login']);
  }
}
