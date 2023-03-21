# LAB - Class 26

## Project: RESTy

### Author: Marco Villafana

### Problem Domain  

Setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure. Then fefactor the RESTy application.

### Links and Resources

- [GitHub PR](https://github.com/villafanam/resty/pull/2) 
- [resty Code Sandbox](https://codesandbox.io/p/github/villafanam/resty/main?workspaceId=9bb919df-dd57-4e7c-8ed2-08fc6874f3bd&file=%2FREADME.md) 


### Setup

- `npm install`


#### How to initialize/run your application (where applicable)

- e.g. `npm start`


#### Features / Routes

- Simple, intuitive user interface
  - A form where a user:
    - Enters a REST API Endpoint (URI)
    - Selects the REST Method to use (`get`, `post`, `put`, `delete`)
    - For `put` and `post`, allow the user to enter JSON to be used as the body for the request
    - A button to initiate the request
  - An output section which:
    - Displays a spinner to indicate a request is in process
    - Once a request is complete:
      - Hide the spinner
      - Display a well formatted view of the API response in 2 sections
        - Headers
        - Body
  - A history section which:
    - Shows a list of all unique, successful requests
    - Allows a user to click or select one to re-populate the form so they can repeat the request

#### Tests

- N/A

#### UML

![lab 26 UML](/assets/lab%2026%20UML.jpg)
