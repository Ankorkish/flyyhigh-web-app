# React Project
This project is a React application that uses [Vite](https://vitejs.dev/) as the bundler for fast development and build. It also includes a JSON server to mock backend data.

## Application Overview

**FlyHigh** is a travel app that allows users to mark and track their visited locations on an interactive map.

### Key Features

- **Main App Interface**: Access the main functionality under the "App" tab to add and view visited locations.
- **Track Visits by City and Country**: 
  - **Cities**: Lists all added cities with visit dates.
  - **Countries**: Shows the number of cities visited per country.
- **Add Locations**: Users can add a city, date, and comments, which appear as markers on the map and in the left-side list.
- **Map Visualization**: Displays locations on a map for a geographic view of travel history.

> **Note**: Login and payment are placeholders and not functional.

### How to Use

1. **Go to the "App" Tab**  
   Manage your visited locations here.
   
2. **Add a Location**  
   Enter city, date, and comments, then click "Send" to add it to the map and list.

3. **View Travel History**  
   - **Cities** tab: Shows each city and visit date.
   - **Countries** tab: Displays visited countries with city counts.

## Prerequisites

Before you begin, ensure that you have the following tools installed on your local machine:

**[Git](https://git-scm.com/downloads)**  
Git is required to clone the repository. You can check if Git is installed by running:
```bash
git --version
```
If you don't see a version number, follow this link to install **[Git](https://git-scm.com/downloads)** 

**[Node.js and npm](https://nodejs.org/en)**
Node.js is required to run JavaScript code outside the browser, and npm (included with Node) is used for managing dependencies. You can verify if Node and npm are installed by running:
bash
```
node -v
npm -v
```
If either command doesn’t return a version number, download and install Node.js from the **[official website](https://nodejs.org/en)**.

## Installation
### Clone the repository
Clone this repository to your local machine:

```
git clone https://github.com/Ankorkish/flyyhigh-web-app.git
```

```
cd flyyhigh-web-app/App
```

Make sure to install all the required dependencies using npm:
```
npm install
```

## Running the Project
### Start the JSON server
With opeend project in terminal:
```
npm run server
```

### Start the development server
make shreyou are still in ... flyyhigh-web-app/App folder and
Open another terminal and run:
```
npm run dev
```
This command will start the Vite development server. Open your browser and navigate to http://localhost:3000 (or the port shown in the terminal) to view the application.
