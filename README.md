# SwagLabs Playwright Automation

Hey there! 👋 I'm exploring automation in Playwright after working with Cypress, and this repository contains my journey in automating SwagLabs, a demo e-commerce platform. The tests are written using Playwright and follow the Page Object Model (POM) approach to keep things organized and scalable.

## Project Overview

In this project, I’m automating key features of the SwagLabs website, including:

- **Cart Operations**: Adding and removing items to/from the cart.
- **Product Sorting**: Sorting items by name (Z-A) and price (low to high, high to low).
- **Checkout Validation**: Verifying the item total, tax, and final total during checkout.

## Testing Approach

- **End-to-End Testing**: The tests cover the entire flow—logging in, adding products to the cart, sorting items, and checking out.
- **Page Object Model (POM)**: Each page (e.g., Login, Cart, Checkout) has its own class, making the code reusable and maintainable.

## Features Tested

- **Login**: Valid login with correct user credentials.
- **Add to Cart**: Add products to the cart and check the cart count.
- **Remove from Cart**: Remove items and verify the cart count decreases.
- **Product Sorting**: Sorting by Z-A and price.
- **Checkout Overview**: Verifying item totals, tax, and the final total at checkout.

## Technologies Used

- **Playwright**: The library used for browser automation.
- **Page Object Model (POM)**: A design pattern that keeps things clean and maintainable.

## How to Use

### Clone the Repository:
```bash
git clone https://github.com/neha-rouniyar/playwright-swaglabs.git
cd playwright-swaglabs



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
