# Frontend Task Manager

## Description

This is a small project that uses Angular 18, GraphQL, and the basics of Angular Material to render a list of tasks from the API, providing (visually) the options to search, edit, delete and add new.
It also adds custom styles, and utilizes third party utility libraries such as tachyons.

## Working App Screenshots

[![video](https://img.youtube.com/vi/video-id/0.jpg)](https://youtu.be/wIz0TO3U3xo)

## Decision Making

- I decided to use Angular Material and use a very basic theme to be able to import pre-built components with no external colors.
- I also decided to use tachyons to avoid having to write utilitary styles such as paddings, margins, flex positioning, etc.
- I utilized NgRx SignalStore since it helps me automatically fetching the data from the API without having to dispatch any extra actions, effects, or even having to create selectors. And I am using a computed signal to be able to organize the returned data into the "buckets" or "lanes" of the board. You can usually utilize a service for the API Requests but I felt like it wasn't needed given I wasn't calling it anywhere else outside the store.

## Technologies/Libraries Used

- NgRx SignalStore
- Tachyons
- Angular Material
- Apollo Client
- Remix Icon

## Steps to test

Test online:

1. Go to [https://gbumanzordev-todo-challenge.netlify.app](https://gbumanzordev-todo-challenge.netlify.app)
2. Set an assigned token in localStorage (key: 'token', the app should auto retrieve it).
3. You can change tabs and go back to the dashboard, it should now load the data.
4. You can click the + button to open the "New Task" modal
5. You can click the three dots for the Edit and Delete Options.

To test locally:

1. Set an .env file similar to the .env.example in the repo
2. Run `npm run config`, this will fill in the environment files for Angular automatically.
3. Run the app with `npm start`
