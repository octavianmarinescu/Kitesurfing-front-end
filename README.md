# Angular6App2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How it works

The application is connected to an existent backend through an API.
First I get a token that will allow the access to the rest of the endpoints.
After this I can access all the endpoints that will give me the rest of the info.
All the details from the backend will be displayed in a table.
When an user will click on a row from the table, a popup with details will appear.
The user can Add to favorites any location and this will be displayed with yellow color.

Also, there is a country filter button that will display all the locations available in that country for kitesurfing.


