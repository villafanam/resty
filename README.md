# LAB - Class 27

## Project: useState() Hook

### Author: Marco Villafana

### Problem Domain  

+ As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data.
+ As a user, I want to see the results returned from an API request in my browser in a readable format.

### Links and Resources

+ [GitHub Actions ci/cd](https://github.com/villafanam/resty/actions)
+ [GitHub PR](https://github.com/villafanam/resty/pull/3)
+ [Code Sandbox--lab 26](https://codesandbox.io/p/github/villafanam/resty/base?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfhlrzh00004g5jw5ltteyuw%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfka9waf00n0356iho5tm627%2522%253A%257B%2522key%2522%253A%2522clfka9waf00n0356iho5tm627%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfka9waf00n1356iz4peodem%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clfka9waf00n2356i41zzt5yt%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfka9waf00n0356iho5tm627%2522%252C%2522spacesOrder%2522%253A%255B%2522clfka9waf00n0356iho5tm627%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)
+ [Code Sandbox--lab 27](https://codesandbox.io/p/github/villafanam/resty/useState?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfhlrzh00004g5jw5ltteyuw%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfiywfml00pn356jyqxjeskn%2522%253A%257B%2522key%2522%253A%2522clfiywfml00pn356jyqxjeskn%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfkab7ij012k356iyms5ffsw%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clfka9rek00k4356i15x93ovm%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clfka9ofy00eb356ilr31i8lt%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfiywfml00pn356jyqxjeskn%2522%252C%2522spacesOrder%2522%253A%255B%2522clfiywfml00pn356jyqxjeskn%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)
+ [Code Sandbox--lab 28]()

### Setup

+ `npm install`

#### How to initialize/run your application (where applicable)

+ e.g. `npm start`

#### Features / Routes

+ Simple, intuitive user interface
  + A form where a user:
    + Enters a REST API Endpoint (URI)
    + Selects the REST Method to use (`get`, `post`, `put`, `delete`)
    + For `put` and `post`, allow the user to enter JSON to be used as the body for the request
    + A button to initiate the request
  + An output section which:
    + Displays a spinner to indicate a request is in process
    + Once a request is complete:
      + Hide the spinner
      + Display a well formatted view of the API response in 2 sections
        + Headers
        + Body
  + A history section which:
    + Shows a list of all unique, successful requests
    + Allows a user to click or select one to re-populate the form so they can repeat the request

#### Tests

+ `npm test`
+ Footer.test.jsx
  + displays footer text as expected

+ Header.test.jsx
  + displays h1 text as expected

+ Form.test.jsx
  + grabs url and method input as expected

+ App.test.jsx
  + allows form use and renders results as expected

#### UML

![lab 26 UML](/assets/lab%2026%20UML.jpg)
