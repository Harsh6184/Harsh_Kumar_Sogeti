import { Page } from '@playwright/test';
 
export class RegistrationPage {
 
    constructor(
        private page: Page
    ) {}
 
    private txtName = '#name';
    private txtEmail = '#email';
    private genderMale = '#gender';
    private txtMobile = '#mobile';
    private txtDob = '#dob';
    private txtSubject = '#subjects';
    private hobbySports = '#hobbies';
    private txtAddress = 'textarea[name="picture"]';
    private stateDropdown = '#state';
    private cityDropdown = '#city';
    private btnLogin = 'input[value="Login"]';
 
    async openRegistrationForm() {
 
        await this.page.goto(
            'https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php'
        );
 
        await this.page.waitForTimeout(2000);
    }
 
    async enterName(name: string) {
 
        await this.page.fill(
            this.txtName,
            name
        );
    }
 
    async enterEmail(email: string) {
 
        await this.page.fill(
            this.txtEmail,
            email
        );
    }
 
    async selectMale() {
 
        await this.page.locator(
            this.genderMale
        ).click();
    }
 
    async enterMobile(mobile: string) {
 
        await this.page.fill(
            this.txtMobile,
            mobile
        );
    }
 
    async enterDateOfBirth(date: string) {
 
        await this.page.fill(
            this.txtDob,
            date
        );
    }
 
    async enterSubject(subject: string) {
 
        await this.page.fill(
            this.txtSubject,
            subject
        );
    }
 
    async selectSports() {
 
        await this.page.locator(
            this.hobbySports
        ).click();
    }
 
    async enterAddress(address: string) {
 
        await this.page.fill(
            this.txtAddress,
            address
        );
    }
 
    async selectState(state: string) {
 
        await this.page.selectOption(
            this.stateDropdown,
            {
                label: state
            }
        );
    }
 
    async selectCity(city: string) {
 
        await this.page.selectOption(
            this.cityDropdown,
            {
                label: city
            }
        );
    }
 
    async clickLogin() {
 
        await this.page.locator(
            this.btnLogin
        ).click();
    }
}
 