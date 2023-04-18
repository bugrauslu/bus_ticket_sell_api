# Project Name

Bus Ticket buy APi

## Installation

To run this project, please follow these steps:

1. Clone or download the repository
2. Install the necessary packages: `npm install`
3. Start the application: `npm start`

The application will run by default at `http://localhost:3000`.

## Usage

This project has the following endpoints:

<hr>
- `POST /api/auth/register`: Registers a new user.
### `POST /api/auth/register`

Registers a new user with the provided user data. The request must contain a JSON payload in the following format the request must be discarded from the body

body:{
"firstName": "string",
"lastName": "string",
"age": "number",
"gender": "boolean",
"email": "string",
"password": "string"
}

- `firstName` (string): The user's first name.
- `lastName` (string): The user's last name.
- `age` (number): The user's age.
- `gender` (boolean): The user's gender (true for male, false for female).
- `email` (string): The user's email address.
- `password` (string): The user's password.

<hr>
- `POST /api/auth/login`: Logs in an existing user.
### `POST /api/auth/login`

Logs in an existing user with the provided email and password. The request should include a JSON payload in the following format:

body:{
"email": "string",
"password": "string"
}


- `email` (string): The user's email address.
- `password` (string): The user's password.


<hr>
- `POST /api/journey/addJourney`: Logs in an existing user.
### `POST /api/journey/addJourney`

Adds a new journey to the system with the provided journey data. The request should include a JSON payload in the following format:
header:{token:"string"}
body:{
"departure": "string",
"destination": "string",
"departureTime": "string",
"price": "number"
}

## Contact

If you have any questions or feedback, please contact me at [bugrauslu@protonmail.com].


