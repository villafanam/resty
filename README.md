# LAB - Class 27

## Project: useState() Hook

### Author: Marco Villafana

### Problem Domain  

+ As a user, I want to enter the REST Method and URL to an API.
+ As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format.

### Links and Resources

+ [GitHub Actions ci/cd](https://github.com/villafanam/resty/actions)
+ [GitHub PR](https://github.com/villafanam/resty/pull/3)
+ [resty Code Sandbox](https://codesandbox.io/p/github/villafanam/resty/main?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfhlrzh00004g5jw5ltteyuw%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfhls3vj0015356if5byzuer%2522%253A%257B%2522key%2522%253A%2522clfhls3vj0015356if5byzuer%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfiyu2xu00ai356j0b0fhwo4%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clfiyua4f00hl356jq9e9xfex%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clfiyu63500dq356jqp3rt7jb%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfhls3vj0015356if5byzuer%2522%252C%2522spacesOrder%2522%253A%255B%2522clfhls3vj0015356if5byzuer%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

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
+ Footer.test.js
  + displays footer text as expected

+ Header.test.js
  + displays h1 text as expected

+ Form.test.js
  + grabs url and method input as expected

#### UML

![lab 26 UML](/assets/lab%2026%20UML.jpg)
