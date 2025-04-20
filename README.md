Here is the content you requested in Markdown format:

```markdown
# SwagLabs Playwright Automation

This repository contains end-to-end automation tests for SwagLabs, a demo e-commerce platform. The tests are built using Playwright, following a Page Object Model (POM) approach to keep the codebase organized and scalable.

## Project Overview

The main focus of this repository is to automate various features of the SwagLabs website, including:

- **Cart Operations**: Adding and removing items to/from the cart.
- **Product Sorting**: Sorting items by name (Z-A) and price (low to high, high to low).
- **Checkout Validation**: Verifying the item total, tax, and final total during checkout.

## Testing Approach

- **End-to-End Testing**: The tests cover the entire process from logging in, adding products to the cart, performing product sorting, and validating the checkout page.
- **Page Object Model (POM)**: The code is organized using POM, where each page of the application (e.g., Login, Cart, Checkout) is represented by a separate class. This allows for better code reusability and maintainability.

## Features Tested

- **Login**: Testing valid login with valid user credentials.
- **Add to Cart**: Adding products to the cart and verifying cart count.
- **Remove from Cart**: Removing products and verifying cart count decreases.
- **Product Sorting**: Testing sorting functionality, including Z-A and price sorting.
- **Checkout Overview**: Verifying item totals, tax, and the final total during checkout.

## Technologies Used

- **Playwright**: A Node.js library for browser automation.
- **Page Object Model (POM)**: A design pattern to organize tests and interact with the web application in a structured way.

## How to Use

### Clone the Repository:
```bash
git clone https://github.com/neha-rouniyar/playwright-swaglabs.git
cd playwright-swaglabs
```

### Install Dependencies:
```bash
npm install
```

### Install Playwright Browsers:
```bash
npx playwright install
```

### Run Tests: To run all tests:
```bash
npx playwright test
```

### Test Reports: After running tests, you can view detailed HTML reports:
```bash
npx playwright show-report
```

## Project Structure

- **`tests/`**: Contains all the test files.
- **`pages/`**: Contains page classes, implementing the Page Object Model.
- **`helpers/`**: Contains helper functions (e.g., login).
- **`playwright.config.ts`**: Playwright configuration file for test setup.

## Conclusion

This project provides a solid foundation for automation testing using Playwright, following best practices like POM. It is suitable for beginners who want to get hands-on experience with test automation for web applications.
```

Simply copy and paste this into a file named `README.md`. Let me know if you need any further modifications!
