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

- `POST /api/auth/register`: Registers a new user.
- `POST /api/auth/login`: Logs in an existing user.

### `POST /api/auth/register`

Registers a new user with the provided user data. The request should include a JSON payload in the following format:

{
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

### `POST /api/auth/login`

Logs in an existing user with the provided email and password. The request should include a JSON payload in the following format:

{
"email": "string",
"password": "string"
}



- `email` (string): The user's email address.
- `password` (string): The user's password.


This project is licensed under the [license name]. For more information, see the `LICENSE` file.

## Contact

If you have any questions or feedback, please contact me at [bugrauslu@protonmail.com].


