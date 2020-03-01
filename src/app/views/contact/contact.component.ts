import { Component } from "@angular/core";
import { Contacts } from "src/app/common/model/contacts.model";

@Component({
  selector: "app-home",
  templateUrl: "./contact.component.html"
})
export class ContactComponent {
  contacts: Contacts[] = [
    new Contacts(
      "juztinlazaro@gmail.com",
      "Justin Lazaro",
      12314,
      "https://lh3.googleusercontent.com/proxy/B86oAEP_bE-j_NVGUcgIzs6Db6K52p93BGuH_gL9LpCu7uRghEO6GykK6EGYDTlj-GtESWGq45sUwsakTB1Qa5kpeBcs17tEPGFu"
    ),
    new Contacts(
      "juztinlazaro1@gmail.com",
      "Justin Lazaro",
      12314,
      "https://lh3.googleusercontent.com/proxy/B86oAEP_bE-j_NVGUcgIzs6Db6K52p93BGuH_gL9LpCu7uRghEO6GykK6EGYDTlj-GtESWGq45sUwsakTB1Qa5kpeBcs17tEPGFu"
    ),
    new Contacts(
      "juztinlazaro2@gmail.com",
      "Justin Lazaro",
      12314,
      "https://lh3.googleusercontent.com/proxy/B86oAEP_bE-j_NVGUcgIzs6Db6K52p93BGuH_gL9LpCu7uRghEO6GykK6EGYDTlj-GtESWGq45sUwsakTB1Qa5kpeBcs17tEPGFu"
    )
  ];
}