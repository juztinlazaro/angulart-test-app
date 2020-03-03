import { Component } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-contact-edit",
  templateUrl: "./contact-edit.component.html"
})
export class ContactEditComponent {
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
