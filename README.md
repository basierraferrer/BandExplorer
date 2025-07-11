# 🎸 Band Explorer – React SPA Demo

This project is a Single Page Application (SPA) built with React. It displays a dynamic list of music bands based on mock data and allows users to explore information using a search bar and genre filters.

---

## API

### **Mock API Server (Express)**
- A separate mini-project in the `api/` folder provides a mock API using Express.
- The server serves JSON files from the `api/data/` directory at the endpoint:

  ```
  http://localhost:3001/mocks/:file
  ```
  For example, `/mocks/bands` returns the list of bands, and `/mocks/001` returns details for band with ID `001`.

- If a requested JSON file does not exist, the server responds with a default JSON object:
  ```json
  {
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
  ```

- CORS is enabled for local development (e.g., Vite at `http://localhost:5173`).

### **Unit Tests**
- Unit tests have been added to the `api/` folder using [Jest](https://jestjs.io/) and [Supertest](https://github.com/ladjs/supertest).
- The tests cover the main API endpoint `/mocks/:file`, checking both the case when a file exists and when it does not (default response).
- To run the tests:
  ```sh
  cd api
  yarn test
  ```
- Test files are located in the root of the `api/` folder (e.g., `server.test.mjs`).

### **Mock Data**
- The `api/data/` folder contains:
  - `bands.json`: List of all bands.
  - Individual band files (e.g., `001.json`, `005.json`) with details for each band.

---

## Frontend (UI)

### **SPA in React + Vite**
The `ui/` folder contains the frontend of the application, built with React, Vite, and TailwindCSS.

### **Unit Tests**
- Unit tests have been added to the `ui/` folder using [Vitest](https://vitest.dev/), [Testing Library](https://testing-library.com/), and [MSW (Mock Service Worker)](https://mswjs.io/).
- The tests cover:
  - Rendering and interaction of main components (`Card`, `Logo`, `Search`).
  - Utility functions (e.g., `getImageURL`).
  - The main app logic in `App.tsx`, including:
    - Loading and displaying bands from the mock API.
    - Filtering by genre/category.
    - Filtering by search input.
    - Combined filtering (search + category).
- To run the tests:
  ```sh
  cd ui
  yarn test
  ```
- Test files are located alongside the components and utilities (e.g., `Card.test.tsx`, `App.test.tsx`).
- MSW is used to mock API requests for reliable and realistic test scenarios.

### **Main Structure**
- **src/components/**: Reusable components such as:
  - `Card`: Displays band information.
  - `Button`: Styled button component.
  - `Logo`: App logo.
  - `Search`: Search bar component.
- **src/utils/**: Utility functions.
- **src/types/**: Shared TypeScript types.

---

## How to Run

### Mock API Server
1. Go to the `api/` directory:

   ```sh
   cd api
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```
3. Start the server:
   ```sh
   yarn start
   ```
   The server will be available at `http://localhost:3001/mocks`.

### Frontend
1. Go to the `ui` directory:
   ```sh
   cd ui
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```
3. Start the app in development mode:
   ```sh
   yarn dev
   ```
   The app will be available at `http://localhost:5173`.

   > Make sure the mock API server (`api/`) is running for the app to work properly.