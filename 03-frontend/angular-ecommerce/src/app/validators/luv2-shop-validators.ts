import { FormControl, ValidationErrors } from "@angular/forms";

export class Luv2ShopValidators {

    // whitespace validation
    static notOnlyWhitespace(control: FormControl): ValidationErrors {
        // if the validation check fails -> return validation errors
        // if the validation check passes -> return null

        // check if string only contains whitespace
        if ((control.value != null) && (control.value.trim().length === 0)) {
            return {"notOnlyWhitespace": true};  // invalid, return error object
        }
        else {
            return null;  // valid
        }
    }
}
