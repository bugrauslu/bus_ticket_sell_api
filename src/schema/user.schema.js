import Response from "../utils/responseMsg";

import  Joi from "joi";

function register(req, res, next) {
  Joi.object({
    firstName: Joi.string()
      .trim()
      .min(3)
      .max(100)
      .required()
      .messages({
			"string.base": "First name field must be a string",
			"string.empty": "First name field cannot be empty",
			"string.min": "First name field must have at least 3 characters",
			"string.max": "First name field can have at most 100 characters",
			"string.required": "First name field is required"
      }),
    lastName: Joi.string()
      .trim()
      .min(3)
      .max(100)
      .required()
      .messages({
			"string.base": "Last name field must be a string",
			"string.empty": "Last name field cannot be empty",
			"string.min": "Last name field must have at least 3 characters",
			"string.max": "Last name field can have at most 100 characters",
			"string.required": "Last name field is required"
      }),
	age: Joi.number().
		integer().
		min(18).
		max(120).
		required()
		.messages({
			"number.base": "Age field must be a number",
			"number.integer": "Age field must be an integer",
			"number.min": "Age field must be at least 18",
			"number.max": "Age field can be at most 120",
			"number.required": "Age field is required"
		  }),
  	gender: Joi.boolean()
		.required()
		.messages({
			"boolean.base": "Gender field must be a boolean value",
			"boolean.required": "Gender field is required"
		  }),
    email: Joi.string()
      .email()
      .trim()
      .min(3)
      .max(100)
      .required()
      .messages({
			"string.base": "Email field must be a string",
			"string.empty": "Email field cannot be empty",
			"string.min": "Email field must have at least 3 characters",
			"string.email": "Please enter a valid email address",
			"string.max": "Email field can have at most 100 characters",
			"string.required": "Email field is required"
      }),
    password: Joi.string()
      .trim()
      .min(6)
      .max(36)
      .required()
      .messages({
			"string.base": "Password field must be a string",
			"string.empty": "Password field cannot be empty",
			"string.min": "Password field must have at least 6 characters",
			"string.max": "Password field can have at most 36 characters",
			"string.required": "Password field is required",
		}),
  })
    .validateAsync(req.body)
    .then(() => {
      next();
    })
    .catch((error) => {
      console.log(error);
      if (error.details && error?.details[0].message){
		return Response.error400(res, error.details[0].message);
	  }
      else{
		return Response.error400(res, "Lütfen Validasyon Kurallarına Uyun");
	   }
       
    });
}


function login(req, res, next) {
	Joi.object({
	  email: Joi.string()
		.email()
		.trim()
		.min(3)
		.max(100)
		.required()
		.messages({
			  "string.base": "Email field must be a string",
			  "string.empty": "Email field cannot be empty",
			  "string.min": "Email field must have at least 3 characters",
			  "string.email": "Please enter a valid email address",
			  "string.max": "Email field can have at most 100 characters",
			  "string.required": "Email field is required"
		}),
	  password: Joi.string()
		.trim()
		.min(6)
		.max(36)
		.required()
		.messages({
			  "string.base": "Password field must be a string",
			  "string.empty": "Password field cannot be empty",
			  "string.min": "Password field must have at least 6 characters",
			  "string.max": "Password field can have at most 36 characters",
			  "string.required": "Password field is required",
		  }),
	})
	  .validateAsync(req.body)
	  .then(() => {
		next();
	  })
	  .catch((error) => {
		console.log(error);
		if (error.details && error?.details[0].message){
		  return Response.error400(res, error.details[0].message);
		}
		else{
		  return Response.error400(res, "Lütfen Validasyon Kurallarına Uyun");
		 }
		 
	  });
  }


export default {
	register,
	login
}
