import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup;

    genders = [
        'male',
        'female'
    ];

    constructor(private formBuilder: FormBuilder){
        // this.myForm = new FormGroup({
        //     'userData': new FormGroup({
        //         'username': new FormControl('Mehdi', Validators.required),
        //         'email': new FormControl('', [Validators.required,
        //             Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        //         ]),
        //     }),
        //     'password': new FormControl('', Validators.required),
        //     'gender' : new FormControl('male'),
        //     'hobbies' : new FormArray([
        //         new FormControl('Cooking', Validators.required)
        //     ])
        // });

        //Another Way to create Forms (as the one from above).
        this.myForm = formBuilder.group({
            'userData': formBuilder.group({
                'username':['Mehdi', [Validators.required, this.exampleValidator]],
                'email': ['', [Validators.required,
                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ]],
            }),
            'password': ['', Validators.required],
            'gender' : ['male'],
            'hobbies' : formBuilder.array([
                ['Cooking', Validators.required,this.asyncExampleValidator]
            ])
            }

        );
    }

    ngSubmit(){
        console.log(this.myForm);
    }

    onAddHobby(){
        //this Optional: the cast tels typeScript the  part this.myForm.controls['hobbies'] is of type <FormArray>
        (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required, this.asyncExampleValidator));
    }

    //[s: string]: have any key which can be interpreted as a string and the value should be boolean.
    exampleValidator(control: FormControl): {[s: string]: boolean}{
        //if conditio will fail because i'm returning something. as long as we return anything, any object the validation
        //will be treated as fail
        if(control.value === 'Example'){
            return {example:true};
        }
        return null;
    }

    asyncExampleValidator(control: FormControl): Promise<any> | Observable<any>{
        const promise = new Promise<any>(
            (resolve,reject) =>{
                setTimeout( ()=> {
                    if(control.value === 'Example'){
                        //it does not matter if we type'invalid' or anything else in resolve({'invalid':true});
                        // the important point is if we resolve anything other then null validation will have failed.
                        resolve({'invalid':true});
                    }else {
                        resolve(null);
                    }
                } ,1500);
            }
        );
            return promise;
    }



}
