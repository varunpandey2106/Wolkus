# WOLKUS MOVIE LIBRARY

## VARUN PANDEY 20MIC0139

This repository contains the DREAM SOFTWARE INTERNSHIP task/submission for Wolkus Technology Solutions.


### Technologies Used:

- **React + Vite**: The frontend of the application is built using React, a popular JavaScript library for building user interfaces, and Vite, a fast build tool for modern web development.
  
- **Firebase**: Firebase provides backend services and a real-time database for the application. It's used for user authentication and data storage
  
- **TMDB Movie API**: The application fetches movie data from The Movie Database (TMDB) API, which provides a rich source of movie information, including details, ratings, and reviews.
  
- **Vercel**: Vercel is used for deployment, providing a platform to host the application and make it accessible to users over the internet.

### Run Instructions:

To run this application locally, follow these steps:

1. **Clone the Repository**:

2. **Get Firebase Credentials**:
Obtain Firebase credentials from the Firebase Developer Console. This includes the Firebase project's configuration, such as the API key, authDomain, projectId, etc.

3. **Configure Environment Variables**:
Create a `.env` file in the root directory of the project and add the Firebase credentials as environment variables.

.env:
VITE_API_KEY="MOVIEAPIKEY"
VITE_FIREBASE_API_KEY=""
VITE_FIREBASE_AUTH_DOMAIN=""
VITE_FIREBASE_PROJECT_ID=""
VITE_FIREBASE_STORAGE_BUCKET=""
VITE_FIREBASE_MESSAGING_SENDER_ID=""
VITE_FIREBASE_APP_ID=""



5. **Install Dependencies**:
```bash
npm install
```

6. **Run the Application**:
```bash
npm run dev
```

6. **Access the Application**:
Once the application is running locally, you can access it in your web browser at `http://localhost:5173`.

### Deployment:

This application is deployed using Vercel. Any changes pushed to the `main` branch are automatically deployed to the production environment. 

