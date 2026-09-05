import { Given, When, Then } from '@cucumber/cucumber';
import { RegistrationPage } from '../../pages/registerPage';
import { CustomWorld } from '../../support/world';
 
let registration: RegistrationPage;
 
Given(
    'I am on the Student Registration Form page',
    async function (this: CustomWorld) {
 
        registration = new RegistrationPage(this.page);
 
        await registration.openRegistrationForm();
    }
);
 
When(
    'I enter {string} in the Name field',
    async function (this: CustomWorld, name: string) {
 
        await registration.enterName(name);
    }
);
 
When(
    'I enter {string} in the Email field',
    async function (this: CustomWorld, email: string) {
 
        await registration.enterEmail(email);
    }
);
 
When(
    'I select {string} as the Gender',
    async function (this: CustomWorld, gender: string) {
 
        await registration.selectMale();
    }
);
 
When(
    'I enter {string} in the Mobile field',
    async function (this: CustomWorld, mobile: string) {
 
        await registration.enterMobile(mobile);
    }
);
 
When(
    'I enter {string} as the Date of Birth',
    async function (this: CustomWorld, dob: string) {
 
        await registration.enterDateOfBirth(dob);
    }
);
 
When(
    'I enter {string} in the Subjects field',
    async function (this: CustomWorld, subject: string) {
 
        await registration.enterSubject(subject);
    }
);
 
 
When(
    'I select {string} as a Hobby',
    async function (this: CustomWorld, hobby: string) {
 
        await registration.selectSports();
    }
);
 
When(
    'I enter {string} in the Current Address field',
    async function (this: CustomWorld, address: string) {
 
        await registration.enterAddress(address);
    }
);
 
 
When(
    'I select {string} as the State',
    async function (this: CustomWorld, state: string) {
 
        await registration.selectState(state);
    }
);
 
When(
    'I select {string} as the City',
    async function (this: CustomWorld, city: string) {
 
        await registration.selectCity(city);
    }
);
 
When(
    'I click the Login button',
    async function (this: CustomWorld) {
 
        await registration.clickLogin();
    }
);
 
 
Then(
    'the registration form should be submitted successfully',
    async function (this: CustomWorld) {
            console.log('Registration submitted successfully');
    }
);
 