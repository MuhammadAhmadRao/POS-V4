/**
 * MANAGEO AUTHENTICATION & POS INTEGRATION SERVICE LAYER
 * 
 * This service provides the contract and client implementation for user authentication,
 * account registration, and post-login redirection into the ManageO POS application.
 * 
 * Intended Backend Endpoints:
 * - POST /api/v1/auth/login        -> Authenticates credentials, returns JWT tokens and user profile
 * - POST /api/v1/auth/register     -> Registers merchant account and creates workspace database
 * - POST /api/v1/auth/forgot-pw    -> Sends password reset instructions
 * - GET  /api/v1/auth/me           -> Validates session and retrieves active merchant permissions
 */

export type BusinessCategory = 'retail' | 'salon' | 'restaurant';

export interface UserRegistrationData {
  fullName: string;
  businessName: string;
  email: string;
  password: string;
  category: BusinessCategory;
  phone?: string;
  numberOfLocations?: number;
}

export interface UserLoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    fullName: string;
    businessName: string;
    email: string;
    category: BusinessCategory;
    role: 'owner' | 'manager' | 'cashier';
  };
  token?: string;
  redirectUrl?: string;
}

class AuthService {
  /**
   * Simulates/executes user registration.
   * When connected to the production backend, this will send a fetch request to POST /api/v1/auth/register.
   */
  async register(data: UserRegistrationData): Promise<AuthResponse> {
    // Artificial latency to demonstrate loading states
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!data.email || !data.password || !data.fullName || !data.businessName) {
      return {
        success: false,
        message: 'Please complete all required fields.',
      };
    }

    if (data.password.length < 8) {
      return {
        success: false,
        message: 'Password must be at least 8 characters with at least one letter and number.',
      };
    }

    // Demo simulation success
    return {
      success: true,
      message: 'Workspace successfully provisioned.',
      user: {
        id: 'usr_' + Math.random().toString(36).substring(2, 9),
        fullName: data.fullName,
        businessName: data.businessName,
        email: data.email,
        category: data.category,
        role: 'owner',
      },
      token: 'demo_jwt_token_' + Date.now(),
      redirectUrl: '/dashboard',
    };
  }

  /**
   * Simulates/executes user login.
   * When connected to the production backend, this will send a fetch request to POST /api/v1/auth/login.
   */
  async login(credentials: UserLoginCredentials): Promise<AuthResponse> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (!credentials.email || !credentials.password) {
      return {
        success: false,
        message: 'Please enter both your work email and password.',
      };
    }

    // Demo success
    return {
      success: true,
      message: 'Authentication successful. Synchronizing terminal register...',
      user: {
        id: 'usr_demo_101',
        fullName: 'Elena Vance',
        businessName: 'Vance Flagship Studio',
        email: credentials.email,
        category: 'retail',
        role: 'owner',
      },
      token: 'demo_jwt_token_' + Date.now(),
      redirectUrl: '/dashboard',
    };
  }

  /**
   * Simulates password reset request.
   */
  async requestPasswordReset(email: string): Promise<{ success: boolean; message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!email || !email.includes('@')) {
      return {
        success: false,
        message: 'Please enter a valid business email address.',
      };
    }

    return {
      success: true,
      message: `Password reset instructions have been dispatched to ${email}.`,
    };
  }
}

export const authService = new AuthService();

