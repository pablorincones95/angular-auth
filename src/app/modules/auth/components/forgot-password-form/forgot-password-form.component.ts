import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestStatus } from '@models/request-status.model';
import { AuthService } from '@services/auth.service';
@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
})
export class ForgotPasswordFormComponent {
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });
  status: RequestStatus = 'init';
  emailSent = false;

  constructor(private formBuilder: FormBuilder, private authSrv: AuthService) {}

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email } = this.form.getRawValue();
      // TODO: Connect
      this.authSrv.recoveryPassword(email).subscribe({
        next: () => {
          this.status = 'success';
          this.emailSent = true;
        },
        error: (error) => {
          console.log(error);
          this.status = 'success';
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
