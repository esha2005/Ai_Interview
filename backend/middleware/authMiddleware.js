module.exports = (req, res, next) => {
  // Check for auth token
  const token = req.header('x-auth-token');
  
  if (!token) {
    // For now, just proceed or return 401
    // return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  
  next();
};
