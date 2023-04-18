const success = (res, message, data) => {
	res.status(200).json({
	  success: true,
	  data: data,
	  message: message ?? "Operation Successful",
	});
  };
  
  const error400 = (res, message) => {
	res.status(400).json({
	  success: false,
	  message: message ?? "Operation Failed!",
	});
  };
  
  const created = (res, message, data) => {
	return res.status(201).json({
	  success: true,
	  data: data,
	  message: message ?? "Operation Successful",
	});
  };
  
  const error500 = (res, message, data) => {
	return res.status(500).json({
	  success: true,
	  data: data,
	  message: message ?? "Operation Failed!",
	});
  };
  
  const error401 = (res, message, data) => {
	return res.status(401).json({
	  success: true,
	  data: data,
	  message: message ?? "Please sign in!",
	});
  };
  
  const error404 = (res, message, data) => {
	return res.status(404).json({
	  success: true,
	  data: data,
	  message: message ?? "The server cannot find the requested resource!",
	});
  };
  
  const error429 = (res, message, data) => {
	return res.status(429).json({
	  success: false,
	  data: data,
	  message: message ?? "Too many requests!",
	});
  };
export default { success, error400, created ,error500 ,error401 ,error404,error429};
