# ManageO Authentication & Existing POS Integration Architecture

**Document Ref:** `MANAGEO-DOC-013`  
**Version:** 1.0 (Developer Integration Brief)  
**Author:** Frontend Architecture & Systems Integration Group  
**Target Audience:** Backend Engineers & Existing ManageO POS Development Team  

---

## 1. Architectural Overview & Separation of Concerns

The ManageO marketing website is architected as an **independent, high-performance static/client application**, decoupled from the cousin's existing core Point of Sale (POS) system.

```
+---------------------------------------------------------------------------------------------------+
| USER FLOW & HANDOFF ARCHITECTURE                                                                  |
|                                                                                                   |
|  [ManageO Marketing Site]                                                                         |
|  http://localhost:3000/                                                                           |
|           |                                                                                       |
|           +--> User clicks "Get Started" or "Sign In"                                            |
|           |                                                                                       |
|  [Authentication Layer: /signup or /login]                                                        |
|  Validated input fields + Business Category Selected (Retail / Salon / Restaurant)                |
|           |                                                                                       |
|           v (Dispatches API request)                                                              |
|  [ManageO Authentication API (Backend)]                                                           |
|  POST /api/v1/auth/login  or  POST /api/v1/auth/register                                          |
|           |                                                                                       |
|           v (Returns Session JWT Token + Target POS Workspace URL)                                |
|  [Existing ManageO POS Application]                                                               |
|  https://app.manageo.io/pos?session_token=JWT&branch_id=...                                       |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Service Layer Implementation

The marketing application implements a clean service layer located in `src/services/authService.ts`.

### 2.1. Registration Contract
```typescript
export interface UserRegistrationData {
  fullName: string;
  businessName: string;
  email: string;
  password: string;
  category: 'retail' | 'salon' | 'restaurant';
  phone?: string;
  numberOfLocations?: number;
}
```

### 2.2. Authentication Contract
```typescript
export interface UserLoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}
```

---

## 3. Required Backend Endpoints Specification

The existing POS backend development team must provide or map the following REST or GraphQL endpoints to complete production integration:

### 3.1. User Registration
* **Endpoint:** `POST /api/v1/auth/register`
* **Request Body:**
  ```json
  {
    "fullName": "Elena Vance",
    "businessName": "Vance Flagship Studio",
    "email": "elena@vancestudio.com",
    "password": "SecurePassword123!",
    "category": "retail"
  }
  ```
* **Expected Response (`201 Created`):**
  ```json
  {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "d8f92j3f8j9238fj23...",
    "user": {
      "id": "usr_941024",
      "fullName": "Elena Vance",
      "businessName": "Vance Flagship Studio",
      "email": "elena@vancestudio.com",
      "category": "retail",
      "role": "owner"
    },
    "redirectUrl": "https://app.manageo.io/pos"
  }
  ```

### 3.2. Merchant Login
* **Endpoint:** `POST /api/v1/auth/login`
* **Request Body:**
  ```json
  {
    "email": "elena@vancestudio.com",
    "password": "SecurePassword123!",
    "rememberMe": true
  }
  ```
* **Expected Response (`200 OK`):**
  ```json
  {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "usr_941024",
      "email": "elena@vancestudio.com",
      "category": "retail",
      "role": "owner"
    },
    "redirectUrl": "https://app.manageo.io/pos"
  }
  ```

### 3.3. Password Reset
* **Endpoint:** `POST /api/v1/auth/forgot-password`
* **Request Body:**
  ```json
  {
    "email": "elena@vancestudio.com"
  }
  ```

---

## 4. Developer Handoff Checklist for Existing POS Team

To link the existing POS dashboard to this marketing website:
1. **Configure Environment Variables:** Add `VITE_API_BASE_URL=https://api.manageo.io` to the `.env` file.
2. **Update Service Fetch Calls:** In `src/services/authService.ts`, replace the simulated `setTimeout` delays with actual `fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/...`)` requests.
3. **Cookie / Token Storage:** Save the received JWT into a secure `httpOnly` cookie or encrypted session storage before executing `window.location.href = res.redirectUrl`.
4. **CORS Headers:** Ensure the authentication server includes `Access-Control-Allow-Origin: https://manageo.io` (and `http://localhost:3000` for development).

