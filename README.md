# GraphiQL 
<!-- DESCRIPTION -->
_GraphiQL App is a playground and interactive development environment (IDE) for exploring and querying any open GraphQL API._

Deployment Link: TBD

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#technology-stack">Technology Stack</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

<!-- TECHNOLOGY STACK -->
## Technology Stack
The project uses the following technologies:

- **Next.js:** React-based framework for building performant and SEO-friendly web applications.

- **React:** Popular JavaScript library for building user interfaces. It enables the creation of dynamic and responsive web applications.

- **Redux:** Predictable state container for JavaScript apps, enabling efficient state management and data flow across components.

- **TypeScript:** Statically typed superset of JavaScript that helps catch errors early and improve code quality.

- **Apollo Client:** State management library for GraphQL applications that simplifies data fetching, caching, and updating.

- **GraphQL:** Query language for APIs, allowing clients to specify the exact data they need, minimizing over-fetching and under-fetching.

- **Cypress:** End-to-end testing tool for modern web applications.

- **React-hook-form:** Easy-to-use and performant React form management library based on hooks.

- **Yup:** JavaScript schema validation library often used with Formik to define and validate form schemas.

- **Sass:** CSS preprocessor that extends CSS with features like nesting, mixins, and functions, making CSS more organized and maintainable.

- **ESLint:** Tool for identifying and fixing problems in your JavaScript code, ensuring code consistency and best practices.

- **Prettier:** Opinionated code formatter that automatically formats your code to follow a consistent style.

- **Lint-staged:** Tool that runs linters on files as they are staged for commit, ensuring code quality before code changes are merged into the codebase. 

- **Husky:** Tool that helps enforce code quality and standards by running scripts (e.g., linting) before commits are made.

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you can run a project locally. Follow these simple steps as an example.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AlxndrSmk/graphiql-app.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Running the Application

To run the application, use the following command:
```
   npm run dev
```
The application will be launched in development mode and can be accessed at [http://localhost:3000](http://localhost:3000).


### Code Formatting and Linting

This project uses ESLint and Prettier for code formatting and linting. Husky is also configured to run pre-commit and pre-push hooks to ensure code quality.

To format the code using Prettier manually, use the following command:
```
   npm run prettier-fix
```
To run ESLint for TypeScript and JSX files, use the following command:
```
   npm run lint:fix
```

### Testing

To run tests, use the following command:
```
   npm run test
```
To see test coverage, use the following command:
```
   npm run e2e:coverage
```

### Building the Project

To create an optimized production build of the project, use the following command:
```
   npm run build
```

## Preview

Before running the preview, make sure you have a production build ready by running the `npm run build` command.
To preview the build and see how the application works in production mode, use the following command:
```
   npm run start
```

## Available Commands
In the BUYIT application, there are also other commands available that can be useful

- `npm run lint`: To check Prettier formatting for TypeScript, JSX, and JSON files.
- `npm run prettier`: To check ESLint errors for TypeScript and JSX files.

<!-- CONTRIBUTORS -->
## Contributors

- [Alexander Samak](https://github.com/alxndrsmk)
- [Oksana Pozdnyak](https://github.com/pozdnyakoks)
- [Henadzi Vasukovich](https://github.com/BrBrov)
