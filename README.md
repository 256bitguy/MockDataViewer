Mock Data Viewer App

Overview

The Mock Data Viewer App is a React-based application that allows users to view, filter, and load an infinite scroll of mock data records. The app is designed to be visually appealing and easy to navigate, featuring responsive layouts and user-friendly components.

Features

Mock Data Generation: Utilizes the @faker-js/faker library to generate mock data including name, email, and age.

Search Functionality: Users can search and filter records by name or email.

Infinite Scroll: Allows users to load more data on-demand with a 'Load More' button.

Responsive Design: Optimized for both desktop and mobile devices.

Project Structure

project-root/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   └── RecordList.jsx
│   ├── utils/
│   │   └── GenerateMockData.js
│   ├── App.jsx
│   ├── main.js
│   ├── index.css
│   
├── .gitignore
├── package.json
└── README.md