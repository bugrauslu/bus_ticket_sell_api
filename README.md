# **[bus_ticket_selling_api](https://github.com/bugrauslu/bus_ticket_selling_api)**


## Installation

1.  Clone this project to your computer or download it as a ZIP file.
2.  Open the terminal and navigate to the project root directory.
3.  Run `npm install` to install the required dependencies.
5.  Run `npm start` to start the application.

### Requirements

The following software needs to be installed in order to run this project:

-   Node.js 14.0 or higher
-   MongoDB

### Installation

1.  Clone this project to your computer or download it as a ZIP file.
2.  Open the terminal and navigate to the project root directory.
3.  Run `npm install` to install the required dependencies.
4.  Run `npm start` to start the application



## API Documentation


## url: http://localhost:3000/api/auth/login 
**METHOD**: POST

**body**:{
	*"email":"string",
	"password":"String"*
}
headers:
param:


response:{
"success":  true,
"data":  {
"token":  "String"
},
"message":  "Success"
}


## url: http://localhost:3000/api/auth/register

**METHOD**: POST
**body**:{
	"firstName":"String",
	"lastName":"String",
	"age":Number,
	"gender":Boolean,
	"email":"String",
	"password":"String"
}
headers:
param:

gender 0 = female
gender 1 = male

**response**:{
"success":  true,
"data":  {
		"firstName":  "String",
		"lastName":  "String",
		"age":  Number,
		"gender":  Boolean, //
		"email":  "String",
		"_id":  "643ea3aeb29b8eac32a1957f",
		"createdAt":  "2023-04-18T14:05:34.425Z",
		"updatedAt":  "2023-04-18T14:05:34.425Z",
		"__v":  0
},
"message":  "User Created"
}

## url: http://localhost:3000/api/journey/addJourney

**METHOD**: POST
**body**:{
		"departure":"String",
		"destination":"String",
		"departureTime":"2023-04-18T10:00:00Z",
		"price":Number
}

headers:{ token:"String" }
param:

**response**:
"success":  true,
"data":  {
"departure":  "String",
"destination":  "String",
"departureTime":  "2023-04-18T10:00:00.000Z",
"price":  Number,
"_id":  "643ea4a2b29b8eac32a19581",
"seats":  [{
"_id":  "643ea4a2b29b8eac32a19582",
"group":  1,
"seatNumber":  1,
"isAvailable":  true,
"gender":  null,
"buyersId":  null
},
{
"_id":  "643ea4a2b29b8eac32a19583",
"group":  1,
"seatNumber":  2,
"isAvailable":  true,
"gender":  null,
"buyersId":  null
}
...
seatNumber:50]

## http://localhost:3000/api/journey/List

**METHOD**: POST
headers:{ token:"String" }
param:
**body**:{		
"departure":"istanbul",
"destination":"izmir",
"departureTime":"2023-04-16"
}
**response**:{
"success":  true,
"data":  [
{
"_id":  "643e6d80677764f67691e94e",
"departure":  "istanbul",
"destination":  "izmir",
"departureTime":  "2023-04-16T17:16:58.544Z",
"price":  500,
"createdAt":  "2023-04-18T10:14:24.531Z",
"updatedAt":  "2023-04-18T10:14:24.531Z",
"__v":  0
},

{
"_id":  "643e6da2677764f67691e9b6",
"departure":  "istanbul",
"destination":  "izmir",
"departureTime":  "2023-04-16T13:16:58.544Z",
"price":  500,
"createdAt":  "2023-04-18T10:14:58.679Z",
"updatedAt":  "2023-04-18T10:14:58.679Z",
"__v":  0
},

{
"_id":  "643e6dbd677764f67691e9ea",
"departure":  "istanbul",
"destination":  "izmir",
"departureTime":  "2023-04-16T15:16:58.544Z",
"price":  500,
"createdAt":  "2023-04-18T10:15:25.605Z",
"updatedAt":  "2023-04-18T10:15:25.605Z",
"__v":  0
}
],
"message":  "Data Found"
}
}

## url: http://localhost:3000/api/journey/buyTicket/:id

**METHOD**: POST
headers:{ token:"String" }
param: id = journeyId
**body**:{
"seatIds":  ["643e6dd6677764f67691ea87"],
"genders":  [0]
}
gender 0 = female
gender 1= male

**response**:{
"success":  true,
"message":  "success"
}

## url: http://localhost:3000/api/journey/Detail/:id

**METHOD**: POST
headers:{ token:"String" }
param: id = journeyId
**body**:{}
**response**:{
"success":  true,
"message":  "success"
}

## url: http://localhost:3000/api/journey/Detail/:id

**METHOD**: POST
headers:{ token:"String" }
param: id = journeyId
**body**:{}
**response**:{
"success":  true,
"data":  {
"_id":  "643e6dd6677764f67691ea86",
"departure":  "izmir",
"destination":  "istanbul",
"departureTime":  "2023-04-16T16:16:58.544Z",
"price":  500,
"seats":  [{
"_id":  "643e6dd6677764f67691ea87",
"group":  1,
"seatNumber":  1,
"isAvailable":  false,
"gender":  false,
"buyersId":  "643e6d53677764f67691e947"
},
....
...
...]
"createdAt":  "2023-04-18T10:15:50.909Z",
"updatedAt":  "2023-04-18T11:27:16.924Z",
"__v":  0
},
"message":  "success"


## url: http://localhost:3000/api/tickets/list


headers:{ token:"String" }
**body**:{}
**response**:{
"success":  true,
"data":  [{
"_id":  "643e6e64677764f67691eb26",
"userId":  "643e6d53677764f67691e947",
"destination":  "istanbul",
"departure":  "izmir",
"price":  500,
"departureTime":  "Sun Apr 16 2023 19:16:58 GMT+0300 (GMT+03:00)",
"seatNumber":  1,
"createdAt":  "2023-04-18T10:18:12.414Z",
"updatedAt":  "2023-04-18T10:18:12.414Z",
"__v":  0},

{"_id":  "643e7e949e0a3bf3e7717f25",
"userId":  "643e6d53677764f67691e947",
"destination":  "istanbul",
"departure":  "izmir",
"price":  500,
"departureTime":  "Sun Apr 16 2023 19:16:58 GMT+0300 (GMT+03:00)",
"seatNumber":  5,
"createdAt":  "2023-04-18T11:27:16.838Z",
"updatedAt":  "2023-04-18T11:27:16.838Z",
"__v":  0},

{"_id":  "643ea6e1b29b8eac32a19621",
"userId":  "643e6d53677764f67691e947",
"destination":  "istanbul",
"departure":  "izmir",
"price":  500,
"departureTime":  "Sun Apr 16 2023 19:16:58 GMT+0300 (GMT+03:00)",
"seatNumber":  2,
"createdAt":  "2023-04-18T14:19:13.090Z",
"updatedAt":  "2023-04-18T14:19:13.090Z",
"__v":  0}
],
"message":  "success"
}
## url: http://localhost:3000/api/tickets/list

headers:{ token:"String" }
params:{id:ticketId}
**body**:{}
**response**:{"success":  true,
"data":  {
"_id":  "643e6e64677764f67691eb26",
"userId":  "643e6d53677764f67691e947",
"destination":  "istanbul",
"departure":  "izmir",
"price":  500,
"departureTime":  "Sun Apr 16 2023 19:16:58 GMT+0300 (GMT+03:00)",
"seatNumber":  1,
"createdAt":  "2023-04-18T10:18:12.414Z",
"updatedAt":  "2023-04-18T10:18:12.414Z",
"__v":  0
},

"message":  "success"