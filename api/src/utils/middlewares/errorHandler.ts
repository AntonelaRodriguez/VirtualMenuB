function errorHandler(err:any, _req:any, res:any, _next:any) {
    const status = err.status || 500;
    const message = err.message || err;
    return res.status(status).json({ msg: message });
  }
  
export default errorHandler;