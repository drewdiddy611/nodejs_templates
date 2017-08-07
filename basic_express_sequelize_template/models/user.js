'use strict';

class User extends Model {}

// Initialize the model.
User.init(
	{
		fname: DataTypes.STRING,
		lname: DataTypes.STRING,
		username: DataTypes.STRING,
		email: DataTypes.STRING
	},
	{
		// options
	}
);

// Add class methods with:
// User.[classMethod] = () => {}

// Add instance methods with:
// User.prototype.[classMethod] => () => {}

module.exports = User;
