# Backend (Play Framework with Slick and H2 Database)

## Prerequisites

Ensure you have [Java 8](https://adoptopenjdk.net/) and [sbt](https://www.scala-sbt.org/1.x/docs/Setup.html) installed.

## Setup & Running the server

1. Navigate to the project root folder via command line.
2. Run the server by executing `sbt run`. 

The server should be up and running at [http://localhost:9000](http://localhost:9000). 

## Database
This application uses an in-memory H2 database, which means data will not persist between server restarts.

The database schema and data seeding are done automatically when the application starts. This is handled by the SQL script found at `conf/db/init-scripts.sql`.

I have created the Data Access Object `BookDAO.scala` for the "Book" table. It uses Slick, a database query and access library for Scala, to handle the underlying SQL.



## Configuring Cross-Origin Resource Sharing (CORS) in Play Framework

Ensure you have the Play CORS module added to your project. If not, add the following line to your `build.sbt` file:

```sbt
libraryDependencies += filters
```

I have also added a cusotm filter in `filters/CORSFilter.scala` to ensure that CORS is properly handled across your entire Play Framework application.

---

# Frontend 

## Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) (comes with Node.js) or [Yarn](https://yarnpkg.com/) installed.

## Setup & Running the server

1. Navigate to the project root folder via command line.
2. Install the dependencies by running `npm install` or `yarn install`.
3. Start the server by running `npm start` or `yarn start`.

## Fetching Data from Backend

The frontend fetches data from the backend using React's Context API. This is set up in the `BooksContext.tsx` file.

To fetch data from another endpoint, change the URL in the `fetchData` function.

The fetched data is then made available throughout the application by using the `useContext` hook.

I have replaced `Books.json` with the `BooksContext` 

---

Remember to run the backend server before the frontend, as the frontend needs to fetch data from the backend.