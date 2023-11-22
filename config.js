import { config } from "dotenv";

config();

export const data = {
  email: {
    user: process.env.USER,
    pass: process.env.PASS
  }
}

