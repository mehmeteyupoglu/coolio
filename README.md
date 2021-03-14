# Coolio

Coolio is a cool small weekend project with a cool name. It basically searches for keywords and retrives data from mock backend. Vue.js and it's ecosystem has been adopted on the client side while [json-server](https://github.com/typicode/json-server) is exploited as a mock server. For the whole list of packages used in the project, please checkout [package.json](https://github.com/mehmeteyupoglu/coolio/blob/main/package.json).

## Principles, Docs and Methodologies

From the very beginning of the project, a clean architecture, well-decomposed code on the client side has been the ultimate objective. Especially reactivity and the reusability of the framework has been exploited to have a light and performant web app.

### Tools, conventions, design systems

- [Conventional commits](www.conventionalcommits.org/) have been used throught the development process for a clean and consistent versioning
- The project has been documented with the help of [jsdoc](https://jsdoc.app/) and [vue style guide](https://vue-styleguidist.github.io/)
- To have a clean reusability of components and a solid reusable structure, [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) principles helped

## Timeline

The project was created within a couple days. For the detailed timeline of the development phase check below:

| Time Period                  |                         Work                          |
| ---------------------------- | :---------------------------------------------------: |
| March 12, 2021 10:00-11.30pm |                 Initial setup, layout                 |
| March 13, 2021 10:00-12.30am |                   Add missing docs                    |
| March 13, 2021 19:00-11.30pm | Initiate json-server, configure axios, service, store |
| March 14, 2021 09:30-11.00am |                      Update docs                      |
| March 14, 2021 12:00-15.00am |   Encapsulate components, add snackbar, unit tests    |
| March 14, 2021 15:30-18.00am |      Render products, more styling and fix docs       |
| March 14, 2021 19:00-20.00am |                   Write unit tests                    |

## Project setup

### Json-server setup

Make sure you have json-server installed on your computer globally

```
npm install -g json-server
```

### Vue project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Run your mock backend

```
json-server --watch db.json
```

### Run your unit tests

```
yarn test:unit
```
