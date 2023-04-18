## API Documentation

### Authentication

#### `POST /api/auth/register`

Creates a new user account.

**Request Body**

```json
{
    "firstName": "string",
    "lastName": "string",
    "age": "number",
    "gender": "boolean", // 0 for female and 1 for male
    "email": "string",
    "password": "string"
}
Response Body
{
    "success": true,
    "data": {
        "firstName": "fatma",
        "lastName": "uslu",
        "age": 20,
        "gender": false,
        "email": "fatmauslu@protonmail.com",
        "_id": "643e6d6a677764f67691e94a",
        "createdAt": "2023-04-18T10:14:02.677Z",
        "updatedAt": "2023-04-18T10:14:02.677Z",
        "__v": 0
    },
    "message": "User Created"
}

POST /api/auth/login
Logs a user in and returns an access token.

Request Body
{
    "email": "string",
    "password": "string"
}


Response Body
{
    "success": true,
    "data": {
        "token": "string"
    },
    "message": "Success"
}

Journey
POST /api/journey/addJourney
Adds a new journey.

Request Headers
{
    "token": "string"
}
Request Body
{
    "departure": "string",
    "destination": "string",
    "departureTime": "2023-04-16T16:16:58.544+00:00",
    "price": "number"
}
Response Body
{
    "success": true,
    "message": "Journey created successfully."
}


POST /api/journey/list
Returns a list of available journeys based on the specified criteria.

Request Headers
{
    "token": "string"
}

Request Body
{
    "departureTime": "2023-04-16T00:00:00",
    "destination": "istanbul",
    "departure": "izmir"
}
Response Body
{
    "success": true,
    "data": [
        {
            "_id": "643e6dcd677764f67691ea1e",
            "departure": "izmir",
            "destination": "istanbul",
            "departureTime": "2023-04-16T15:16:58.544Z",
            "price": 500,
            "createdAt": "2023-04-18T10:15:41.180Z",
            "updatedAt": "2023-04-18T10:15:41.180Z",
            "__v": 0
        },
        {
            "_id": "643e6dd1677764f67691ea52",
            "departure": "izmir",
            "destination": "istanbul",
            "departureTime": "2023-04-16T13:16:58.544Z",
           
