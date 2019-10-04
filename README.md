# React Coding Challenge

Fork this repository as a starting point. 

Your starting point is app/client/Components/App.js

Key technologies you must use
- React - https://www.npmjs.com/package/react
- Redux - https://www.npmjs.com/package/redux
- Styled-components - https://www.npmjs.com/package/styled-components
- Material-UI (Optional) - https://www.npmjs.com/package/@material-ui/core

You will be creating an application that displays a list of publications that is able to be sorted by date, filtered by author, and searchable by publication title.

Needs to show a list of publications ordered by date, as well as the name of the author <first name, email>.
The user should be able to invert the order of publications showing the oldest ones first.
All the authors should be listed in a sidebar, and the user should be able to click on one to see a list of all of his/her publications.
The user should be able to search all publications by title. (This has to be paginated)

Anything that is not specified here is up to your criteria, taking into account all the points mentioned above. 

To start the application locally:
```
npm run dev
```
You can view it at http://localhost:3000/

API endpoints you need to use to complete the challenege.
```
/authors - returns a list of all authors
/authors/:id - returns an author by id
/authors/:id/publications - returns an author by id and all of their publications
/publications - returns all publications
/search/:searchTerm - returns publications that their title includes the search term
```
