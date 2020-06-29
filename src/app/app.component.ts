import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Angular Forms';

    myform: FormGroup;
    ngOnInit() {
        this.myform = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
            ]),
            adress: new FormGroup({
                country: new FormControl('ua'),
                city: new FormControl('', Validators.required),
            }),
            skills: new FormArray([]),
        });
    }

    submit() {
        if (!this.myform.invalid) {
            console.log(this.myform);
            const formData = { ...this.myform.value };
            console.log('Данные формы: ', formData);
        }
    }

    setCapital() {
        const capital = {
            ru: 'маасква',
            ua: 'Киев',
            by: 'Минск',
        };
        const cityKey = this.myform.get('adress').get('country').value;
        const cityCap = capital[cityKey];

        this.myform.patchValue({
            adress: { city: cityCap },
        });
    }

    addSkills() {
        console.log(this.myform.get('skills'));
        const control = new FormControl('', Validators.required);
        (this.myform.get('skills') as FormArray).push(control);
    }
}
