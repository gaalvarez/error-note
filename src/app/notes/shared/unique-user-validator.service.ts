import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRegisterService } from './user-register.service';

@Injectable()
export class UniqueUserValidatorService implements AsyncValidator {

 constructor(private urService: UserRegisterService) { }

 validate(
   ctrl: AbstractControl
 ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
   return new Promise((resolve, reject) => {
     this.urService.isUsernameUsed(ctrl.value).subscribe((res: any) => {
       console.log(JSON.stringify(res));
       if (res.count > 0) {
         return resolve({ nounique: true });
       } else {
         return resolve(null);
       }
     },
       error => reject(error));
   });
 }
}
