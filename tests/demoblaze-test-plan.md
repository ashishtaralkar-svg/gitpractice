# Demoblaze Test Plan

## Application Overview

This test plan covers the functionality of the Demoblaze e-commerce website, ensuring that all critical user flows and features are tested.

## Test Scenarios

### 1. Homepage Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage Load Test

**File:** `tests/homepage/homepage-load.spec.ts`

**Steps:**
  1. Navigate to the Demoblaze homepage.
    - expect: The homepage should load successfully.
    - expect: The title should be 'STORE'.
  2. Verify the navigation bar is visible.
    - expect: The navigation bar should display links for Home, Contact, About Us, Cart, Log in, and Sign up.
  3. Verify the carousel is functional.
    - expect: The carousel should display images and allow navigation using Previous and Next buttons.

#### 1.2. Category Navigation Test

**File:** `tests/homepage/category-navigation.spec.ts`

**Steps:**
  1. Click on the 'Phones' category.
    - expect: The page should display products under the Phones category.
  2. Click on the 'Laptops' category.
    - expect: The page should display products under the Laptops category.
  3. Click on the 'Monitors' category.
    - expect: The page should display products under the Monitors category.

### 2. Product Tests

**Seed:** `tests/seed.spec.ts`

#### 2.1. Product Details Test

**File:** `tests/products/product-details.spec.ts`

**Steps:**
  1. Click on a product from the homepage.
    - expect: The product details page should open.
    - expect: The page should display the product name, price, description, and image.
  2. Click the 'Add to Cart' button.
    - expect: The product should be added to the cart.
    - expect: A confirmation message should appear.

### 3. Cart Tests

**Seed:** `tests/seed.spec.ts`

#### 3.1. Cart Functionality Test

**File:** `tests/cart/cart-functionality.spec.ts`

**Steps:**
  1. Add a product to the cart.
    - expect: The product should appear in the cart with the correct name, price, and quantity.
  2. Remove a product from the cart.
    - expect: The product should be removed from the cart.
    - expect: The total price should update accordingly.

### 4. Authentication Tests

**Seed:** `tests/seed.spec.ts`

#### 4.1. Login Test

**File:** `tests/authentication/login.spec.ts`

**Steps:**
  1. Click on the 'Log in' link.
    - expect: The login modal should appear.
  2. Enter valid credentials and submit.
    - expect: The user should be logged in successfully.
  3. Enter invalid credentials and submit.
    - expect: An error message should appear.

#### 4.2. Sign Up Test

**File:** `tests/authentication/signup.spec.ts`

**Steps:**
  1. Click on the 'Sign up' link.
    - expect: The sign-up modal should appear.
  2. Enter valid details and submit.
    - expect: The user should be registered successfully.
  3. Enter duplicate details and submit.
    - expect: An error message should appear.
