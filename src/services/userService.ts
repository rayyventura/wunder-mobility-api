import { UserData } from "../controllers/userController.js";
import * as userRepository from "../repositories/userRepository.js";

export async function register(data: UserData) {
    await userRepository.register(data);
}

