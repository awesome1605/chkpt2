// customMiddleware.js
const workingHoursMiddleware = (req, res, next) => {
    const currentDay = new Date().getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    const currentHour = new Date().getHours();
  
    // Check if it's a weekday (Monday to Friday) and the time is between 9 and 17
    const isWorkingHours = currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 22;
  
    if (isWorkingHours) {
      // Continue with the next middleware or route handler
      next();
    } else {
      // Respond with an error or redirect the user
      res.status(403).send('Sorry, the web application is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
      // Alternatively, you could redirect the user to a specific page
      // res.redirect('/outside-working-hours');
    }
  };
  
  module.exports = workingHoursMiddleware;
  