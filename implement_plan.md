# Tech Simplify Store - End-to-End Implementation Plan

This document serves as the master blueprint for building the Tech Simplify Store. It outlines the exact workflows, database structures, and UI/UX standards agreed upon.

---

## CORE UX & SECURITY AGREEMENTS (The 4 Golden Rules)
These are the strict rules we agreed upon for the user experience and security:

1. **NO POPUPS (Dedicated Page):** When a client clicks the "ACCOUNT" icon, they will be taken to a **New UI Page** (Full screen) dedicated purely to Login/Register. We will not use popups.
2. **OTP REGISTRATION FLOW:** Users enter Email & Password -> Click **"Create Account"** -> Redirected to a UI with **6 empty boxes** (one letter per box) -> Upon success, shows "Success" message and redirects to Login.
3. **GOOGLE LOGIN (No Password):** Google Login is a **1-click login** (no password required). Google handles the security. If they login normally (Email), they use the password they created.
4. **ADMIN GHOST PAGE:** Admin uses a **Secret Link** only. The page is completely blank with NO logo and NO register button. It only has inputs for Email and Password.

---

## 1. Database Architecture (SQL)
The foundation of the application. We will strictly collect information only when necessary to ensure a smooth User Experience.

### `Users` Table
- `id`, `email`, `password_hash`, `role` (client/admin), `auth_provider` (email/google).
- *UX Note:* We do NOT collect Name, Phone, or Address here. We only collect them during the Checkout phase.

### `OTP_Requests` Table
- `id`, `email`, `otp_code`, `expires_at`.
- *Security Note:* Codes expire in exactly **3 minutes**.

### `Products` Table
- `id`, `name`, `price`, `brand`, `category`, `image_url`, `description`.
- *UI Requirement:* Added `colors_available` and `stock_quantity` to support the Add to Cart features.

### `Orders` Table
- `id`, `user_id`, `total_price`, `payment_status` (Pending/Success), `shipping_address`, `phone_number`, `full_name`.

---

## 2. Shopping & Cart Flow (Frontend Vue)

- **Product Details:** Before clicking "Add to Cart", users must select:
  1. **Quantity:** A `[ - ] 1 [ + ]` selector.
  2. **Color:** A color picker (e.g., Space Gray, Silver).
- **Checkout & Payments:**
  - This is where we finally ask for Full Name and Phone Number.
  - **Payment UI:** A highly professional grid interface featuring official Bank Logos (ABA, KHQR, ACLEDA, Cash on Delivery) inside clean, rounded boxes.

---

## 3. Admin Security & Dashboard

### Dynamic Route Injection
- The Vue application does not contain the Dashboard code by default.
- Once the Python Backend verifies the HttpOnly cookie, Vue dynamically "injects" the Dashboard layout (Sidebar, Tables).
- Logging out completely destroys the Dashboard code from the browser.

---

## 4. Next Steps (Action Plan)

1. **Step 1:** Finalize the UI concept for the Admin Dashboard (Sidebar layout, Product Management tables).
2. **Step 2:** Initialize the Python FastAPI Backend in the `/backend` folder.
3. **Step 3:** Generate the SQL Tables and connect them to Python.
4. **Step 4:** Build the Vue Authentication Page & OTP components.
5. **Step 5:** Connect Vue to Python to bring it all to life.
