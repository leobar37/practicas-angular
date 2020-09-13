import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MyCustomValidators } from '../../utils/myValidatos';
import {
    FormBuilder,
    Validator,
    FormGroup,
    Validators,
    FormArray,
    FormControl,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
    cuestionsData = [
        { payload: 'one', cuestion: '¿te bañas?', rpta: '' },
        { payload: 'dos', cuestion: '¿te gusta el chocolate?', rpta: '' },
        { payload: 'three', cuestion: '¿te gusta el mani?', rpta: '' },
    ];
    profileForms: FormGroup = null;
    constructor(private fb: FormBuilder, private _user: UserService) {}
    ngOnInit(): void {
        this.profileForms = this.fb.group(
            {
                firstName: ['', Validators.compose([Validators.required])],
                lastName: ['', Validators.compose([Validators.required])],
                edad: [
                    ,
                    Validators.compose([
                        MyCustomValidators.isYounger,
                        MyCustomValidators.limitNumber(100),
                    ]),
                ],
                email: ['', [], [MyCustomValidators.checkEmail(this._user)]],
                address: this.fb.group({
                    street: [''],
                    city: [''],
                    state: [true],
                }),
            },
            {
                validators: [
                    MyCustomValidators.identStrings(['firstName', 'lastName']),
                ],
            },
        );
        this.buildCuetions();

        this.profileForms.get('cuestions').valueChanges.subscribe((data) => {
            console.log(
                (this.profileForms.get('cuestions') as FormArray).controls,
            );
        });
    }
    buildCuetions() {
        let cuestionInput = [] as FormControl[];
        cuestionInput = this.cuestionsData.map((item) => this.fb.control(['']));
        this.profileForms.addControl(
            'cuestions',
            this.fb.array([...cuestionInput]),
        );
    }

    submitFormUser($event): void {
        console.log(this.profileForms.value);
    }
    get validNumber() {
        return this.profileForms.get('edad').errors;
    }
    get edadValid() {
        return this.profileForms.get('edad').invalid;
    }
    get emailExists() {
        return this.profileForms.get('email').getError('emailExists') && true;
    }
}
