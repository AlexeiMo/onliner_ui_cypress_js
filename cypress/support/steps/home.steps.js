import {homePage} from "../page_objects/home.page";

export class HomeSteps {

    openLoginForm() {
        homePage.clickLoginButton()
    }

    typeCredentials(login, password) {
        homePage.fillInLoginForm(login)
        homePage.fillInPasswordForm(password)
    }

    submitCredentials() {
        homePage.clickSubmitButton()
    }

    verifyLogin() {
        homePage.profileImage().should('be.visible')
    }

    navigateToPage(title) {
        homePage.clickNavigationLink(title)
    }

    verifyNavigation(url) {
        cy.url().should('contain', url)
    }

}

export const homeSteps = new HomeSteps()
