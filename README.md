```markdown
# Met Library App

A sophisticated Next.js application leveraging the Met Library API to allow users to search for artwork, manage user profiles, and save favorite pieces and search history. User data is securely stored using MongoDB and managed via a custom API hosted on Cyclic.sh.

## Live Demo

Explore the live application: [Met Library App](https://met-library-app-1.vercel.app)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Artwork Search**: Utilize the Met Library API to search for artwork.
- **User Profiles**: Register and log in to manage personal profiles.
- **Favorites Management**: Save and view favorite artworks.
- **Search History**: Keep track of past artwork searches.
- **Secure Storage**: User data is securely stored in MongoDB.

## Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Custom API on Cyclic.sh, MongoDB
- **Hosting**: Vercel

## Project Structure

```plaintext
myapp/
├── .next/
├── components/
│   ├── ArtworkCard.js
│   ├── ArtworkCardDetail.js
│   ├── Layout.js
│   ├── MainNav.js
│   ├── RouteGuard.js
├── lib/
│   ├── authenticate.js
│   ├── userData.js
├── node_modules/
├── pages/
│   ├── api/
│   ├── artwork/
│   ├── _app.js
│   ├── _document.js
│   ├── favourites.js
│   ├── history.js
│   ├── index.js
│   ├── login.js
│   ├── register.js
│   ├── search.js
├── public/
├── styles/
├── .env
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── README.md
├── store.js
└── vercel.json

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/met-library-app.git
    cd met-library-app
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables:
    ```env
    MONGODB_URI=your_mongodb_uri
    NEXT_PUBLIC_API_URL=your_custom_api_url
    ```

4. **Run the development server:**
    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment

The application is hosted on Vercel. To deploy your own instance:

1. **Push your code to GitHub.**
2. **Connect your GitHub repository to Vercel.**
3. **Configure environment variables in the Vercel dashboard.**
4. **Deploy the application.**

## API Endpoints

### Met Library API

- `GET /api/artwork/search?q={query}`: Search for artwork by query.
- `GET /api/artwork/{id}`: Retrieve artwork details by ID.

### Custom User API (Cyclic.sh)

- `POST /api/register`: Register a new user.
- `POST /api/login`: Authenticate a user.
- `GET /api/user/{id}/favorites`: Get a user's favorite artworks.
- `GET /api/user/{id}/history`: Get a user's search history.
- `POST /api/user/{id}/favorites`: Add an artwork to user's favorites.
- `POST /api/user/{id}/history`: Add a search to user's history.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with any enhancements or bug fixes.

## Contact

For any inquiries or questions, please reach out to [arman.jeevani@gmail.com](mailto:arman.jeevani@gmail.com).
