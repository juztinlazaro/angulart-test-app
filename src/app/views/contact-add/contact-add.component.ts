import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-add",
  templateUrl: "./contact-add.component.html"
})
export class ContactAddComponent implements OnInit {
  contactForm: FormGroup;

  name: string = "";
  email: string = "";
  phone: string = "";

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    });
  }

  onSubmit() {
    console.log("payload", this.contactForm.value);
  }
}
