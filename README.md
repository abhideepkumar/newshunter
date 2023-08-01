# NewsHunter

NewsHunter is a Next.js project that allows users to search for news articles based on keywords and displays relevant articles . It uses the News API to fetch news data and display it.

## Features

- Users can enter a keyword in the search bar and click the "Go" button to search for news articles related to that keyword.
- The Website will display news articles with their titles, authors, sources, and thumbnails.
- Clicking on an article will redirect the user to the full article on the original website.

## Getting Started

Follow the steps below to get the NewsHunter app up and running:

1. Clone the repository:

```bash
git clone <repository-url>
cd NewsHunter
```

2. Install the dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm run dev
```

The application should now be running at `http://localhost:3000`.

## Project Structure

```
|-- components
|   |-- Navbar.js
|-- pages
|   |-- index.js
|   |-- news
|       |-- [slugs].js
|-- public
|   |-- ...
|-- README.md
|-- package.json
|-- next.config.js
```
## Deploying the App

Website is deployed at `https://newshunter0.netlify.app/`. You can test the website on this website.

## Contributions

Contributions to the project are welcome. If you find any issues or want to add new features, feel free to create a pull request.
