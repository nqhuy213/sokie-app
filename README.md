# Sokie App

Sokie App is a platform that allows influencers/content creators create, customise and promote their content channels all in one link.

# Overview

This `README.md` documents how to setup the project, summarize the development process.

# Things to Learn:

These links should act as a starting point.
- [Create React App](https://create-react-app.dev/docs/getting-started/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Cloud Firestore](https://firebase.google.com/docs/firestore)

# Deployment Workflow

We are using Vercel to manage the continuous deployment. `develop` and `master` are two main branches for Staging and Production respectively.
- Staging instance: https://sokie-app-staging.vercel.app/
- Production instance: https://sokie-app-production.vercel.app/

# Getting Started

1. Install [Node.js/npm](https://nodejs.org/en/download/).

2. Fallback Node.js to version 17.4.0.

- `sudo npm install -g n`.
- `sudo n 17.4.0`.
- Check via. `node --version`.

3. Install dependencies: Run `npm install` from this repo's root directory
4. Connect to Firebase

- Create Firebase project for local use in [Firebase Console](https://console.firebase.google.com). 
- Use [this tutorial](https://firebase.google.com/docs/web/setup?authuser=1&hl=en) to create web app in the project

5. Run `cp .env.example .env`.
6. Add the Firebase app configuration values to the `.env` file to connect Firebase to your local instance.
7. Run `npm run start` and go to https://localhost:3000.
