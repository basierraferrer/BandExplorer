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

### **Mock Data**
- The `api/data/` folder contains:
  - `bands.json`: List of all bands.
  - Individual band files (e.g., `001.json`, `005.json`) with details for each band.

---

## Frontend (UI)

### **SPA in React + Vite**
The `ui/` folder contains the frontend of the application, built with React, Vite, and TailwindCSS.

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