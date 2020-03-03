import { Contacts } from "src/app/common/model/contacts.model";

export const initialState = {
  contacts: [
    new Contacts(
      "juztinlazaro@gmail.com",
      "Justin Lazaro",
      12314,
      "https://careerlinkz.com/wp-content/uploads/2018/05/avatar_male.png"
    ),
    new Contacts(
      "juztinlazaro1@gmail.com",
      "Justin Lazaro",
      12314,
      "https://careerlinkz.com/wp-content/uploads/2018/05/avatar_male.png"
    ),
    new Contacts(
      "juztinlazaro2@gmail.com",
      "Justin Lazaro",
      12314,
      "https://careerlinkz.com/wp-content/uploads/2018/05/avatar_male.png"
    )
  ]
};
