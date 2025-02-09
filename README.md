# Restaurant Website - Lido

This is a sample restaurant website built using Webpack. It features dynamic content loading based on user interaction with navigation tabs.

[View the live website](https://dejanpls.github.io/lido)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Introduction

This website provides information about the restaurant, including the menu, reservation option, and general contact details.  It demonstrates a simple approach to dynamic content rendering using JavaScript and Webpack.

When a user clicks on a navigation tab (Home, Make a Reservation, or Menu), the corresponding content is loaded and displayed without requiring a full page reload.

## Features

* **Dynamic Content Loading:**  Content for each section (Home, Reservation, Menu) is loaded dynamically when the user clicks the corresponding tab.
* **Home Page:**  Displays a welcome message, restaurant image, and brief description.
* **Reservation Page:**  Provides a telephone number and information on how to make a reservation.
* **Menu Page:**  Showcases the restaurant's menu items, with categories and descriptions.
* **Webpack Bundling:**  Uses Webpack to bundle and optimize the website's assets for efficient loading.
* **Clean and Responsive Design:** The website is designed to be visually appealing on desktop devices.

## Technologies Used

* **HTML:**  Structure of the website.
* **CSS:**  Styling of the website.
* **JavaScript:**  Dynamic content loading and interactivity.
* **Webpack:**  Module bundler.

## Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/dejanpls/lido.git](https://www.google.com/search?q=https://github.com/dejanpls/lido.git)
   ```

2. Navigate to the project directory:
   ```bash
   cd lido
   ```

3. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run start # or yarn start - this depends on your webpack configuration
   ```

2. Open your browser and navigate to the provided URL (usually `http://localhost:8080`).

3. Interact with the navigation tabs to view different sections of the website.

## Project Structure

```
restaurant-website/
├── src/
│   ├── template.html           # Main HTML file
│   ├── index.js                # Main JavaScript file (entry point)       
│   ├── display.js              # DOM elements manipulation file
│   ├── element.js              # DOM elements creation file
│   └── ...
│   ├── styles/                 # CSS stylesheets
│   │   ├── dialog.css
│   │   ├── home.css
│   │   ├── menu.css
│   │   ├── reservation.css
│   │   ├── styles.css          # Main Stylesheet (connected to index.js)
│   └── ...
├── README.md                   # Project documentation file
├── .gitignore                  # Git configuration file
├── webpack.config.js           # Webpack configuration file
├── package.lock.js             # Project dependencies and scripts
├── package.json                # Project dependencies and scripts
└── ...
```