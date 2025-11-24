import User from "../Models/UserModel.js";
import UserService from "../Services/UserService.js"
import { UserSchema } from "../Validations/UserValidations.js";

export const AddUser = async (req, res) => {
  try {

    console.log(req.body);
    const validationResult = UserSchema.safeParse(req.body);
    // console.log(validationResult)
    if (!validationResult.success) {
      console.log(validationResult.error.format())
      return res.status(400).json({ message: "Validation Error"});
    }
    const { full_name, email, password } = req.body;
    if (await UserService.userExists(email)) {
      return res.status(401).json({ message: "User with this email already exists" });
    }
    const newUser = await User.create({ full_name, email, password });
    res.status(201).json({ message: "User created successfully", user: newUser });
  }
  catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}

export const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}