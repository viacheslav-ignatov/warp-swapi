Objectives of this exerceise

1. Increasing familiarity with Tailwind
2. Increasing familiarity with React and TypeScript

## Exercise

### Goal

Rendering list of film and list of characters in that film. Clicking on characters should open a modal window that shows details about this specific character.

### Files/Folders

- core-ui/
  It has Modal and Expansion panel components in it. Ideally you don't need to change anything in these components, but feel free to introduce your own implementation of them. You need to use them in this exercise to achieve end results
- Exercise/
  - Components/
    You are provided a couple of components already (Such as FilmList and FilmListItem). Feel free to alter them, delete them, add new components.
  - data/
    You can find static data here. We have a list of films and in each film we have list of characters
  - types.ts
    You can find types/interfaces you need here. Some properties already added for you as a reference, please add the rest of them. Hint: files in data/ folder are your frienda to find the properties you need. Ideally you don't need to define new types here but feel free to do so. You do need to give final shape to these types though otherwise TypeScript will complain <3 
  - Exercise.tsx
    This component is already imported and available in `App.tsx`. You may need to change some stuff in this file as well to get/pass the data. You don't have to worry about import/exporting it though
- index.ts files
  These files are mainly used to export stuff
- App.tsx
  Heart and soul of your application. Entry point for your app.
