import { createContext } from "react";

type UserType = {
  user_id: number;
  username: string;
  bio: string;
  avatar_img_url: string;
};

const CurrentUserContext = createContext<UserType>({
  username: "freezypop",
  user_id: 1,
  bio: "I like to sit in the fridge making sick burns about the maternal figure in your life.",
  avatar_img_url:
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
});

export default CurrentUserContext;
