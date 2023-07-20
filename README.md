
# Quick Store eCommerce Website

This is an eCommerce website built with React.js. It provides a platform for users to browse and purchase products.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/amit8171-pro/frontend-assignment2.git
   ```

2. Install dependencies:

   ```bash
   cd frontend-assignment
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your web browser and navigate to [http://localhost:5173/](http://localhost:5173/) to view the website.

## Project Structure

- `src/`: Contains the source code of the eCommerce website.
  - `src/components/`: Holds reusable React components.
  - `src/pages/`: Contains individual pages of the website.
- `public/`: Contains public assets such as images or fonts.
- `README.md`: This file, providing information about the project.

## Features

-Home Page: Display a list of products with their images, names, and prices. Fetch the list from the provided API endpoint.
-Search Page: Include a search bar where users can input the name of a product. On form submission, display a list of search results (products) fetched from the API endpoint.
-Product Details Page: When a user clicks on a product from the search results or product list, they should be redirected to a page that displays detailed information about the product, including the product image, name, price, and description.

## Dependencies

    "dependencies": {
    "@tanstack/react-query": "^4.29.25",
    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.10.1",
    "react-router": "^6.14.2",
    "react-router-dom": "^6.14.2"
  },


