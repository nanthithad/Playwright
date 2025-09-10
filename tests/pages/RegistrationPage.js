const { expect } = require('@playwright/test');

class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.email = page.getByRole('textbox', { name: 'email@example.com' });
        this.number = page.getByRole('textbox', { name: 'enter your number' });
        this.role = page.getByRole('combobox');
        this.genderFemale = page.getByRole('radio', { name: 'Female' });
        this.genderMale = page.getByRole('radio', { name: 'Male' });
        this.password = page.getByRole('textbox', { name: 'Passsword' });
        this.confirmPassword = page.getByRole('textbox', { name: 'Confirm Password' });
        this.termsCheckbox = page.getByRole('checkbox');
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async navigateToRegistrationPage() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/register');
        await this.firstName.waitFor({ state: 'visible' });
    }

 async fillRegistrationForm({ firstName, lastName, email, number, role, gender, password }) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.number.fill(number);
    await this.role.selectOption(role);
    if (gender === 'Female') {
        await this.genderFemale.check();
    } else if (gender === 'Male') {
        await this.genderMale.check();
    }
    await this.password.fill(password);
    await this.confirmPassword.fill(password);
    await this.termsCheckbox.check();
}

    async submitForm() {
        await this.registerButton.click();
    }

    async login(email, password) {
        await this.loginButton.click();
        await this.email.fill(email);
        await this.page.getByRole('textbox', { name: 'enter your passsword' }).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}

module.exports = RegistrationPage;