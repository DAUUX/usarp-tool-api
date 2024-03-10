const UserModel = require("../models/user.model");

module.exports = {
  async signup(request, response) {
    const {
      fullname,
      email,
      password,
      gender,
      birthdate,
      profile,
      organization,
    } = request.body;
    try {
      const user = await UserModel.create({
        fullname,
        email,
        password,
        gender,
        birthdate,
        profile,
        organization,
      });

      return response.status(201).json(user);
    } catch (error) {
      const { message, type } = error.errors[0];
      // console.error(error.errors[0].message, error.errors[0].type);
      return response.status(400).json({ message, type });
    }
  },
  async signin(request, response) {
    const { email, password } = request.body;
    try {
      // Find user by email address
      const user = await UserModel.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return response.status(404).json({ message: "User not found" });
      }

      const isPasswordValid = await user.validatePassword(password);
      if (!isPasswordValid) {
        return response.status(400).json({ message: "Invalid password" });
      }
      // Generate and return token
      const token = user.generateToken();
      return response.status(200).json({ token });
    } catch (error) {
      return response.status(400).json({ error });
    }
  },
};
