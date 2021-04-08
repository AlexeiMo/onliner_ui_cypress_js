export class HomePage{

    loginButton() {
        return cy.get('.auth-bar__item.auth-bar__item--text')
    }

    loginForm() {
        return cy.get('#auth-container input[type="text"]')
    }

    passwordForm() {
        return cy.get('#auth-container input[type="password"]')
    }

    submitButton() {
        return cy.get('#auth-container button')
    }

    profileImage() {
        return cy.get('.b-top-profile__image.js-header-user-avatar')
    }

    navigationLinks() {
        return cy.get('.b-main-navigation')
    }

    clickLoginButton() {
        this.loginButton().click()
    }

    fillInLoginForm(login) {
        this.loginForm().type(login)
    }

    fillInPasswordForm(password) {
        this.passwordForm().type(password)
    }

    clickSubmitButton() {
        this.submitButton().click()
    }

    clickNavigationLink(title) {
        this.navigationLinks().contains(title).click()
    }
}

export const homePage = new HomePage()
