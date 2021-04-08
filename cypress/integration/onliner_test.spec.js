import {homeSteps} from "../support/steps/home.steps";
import {catalogSteps} from "../support/steps/catalog.steps";
import {catalogPage} from "../support/page_objects/catalog.page";

const testData = require('../support/test_data/test.data')

describe('Onliner smoke tests', () => {

    beforeEach('Open application', () => {
        cy.visit('/')
    })

    it('should authorize user', () => {
        homeSteps.openLoginForm()
        homeSteps.typeCredentials(
            testData.login.login,
            testData.login.password
        )
        homeSteps.submitCredentials()
        homeSteps.verifyLogin()
        Cypress.Cookies.preserveOnce('ouid', '__io_session_id', 'oss')
    })

    it('should navigate to catalog page', () => {
        homeSteps.navigateToPage(testData.navigation.catalog.title)
        homeSteps.verifyNavigation(testData.navigation.catalog.url)
    })

    it('should navigate to news (default) page', () => {
        homeSteps.navigateToPage(testData.navigation.news.title)
        homeSteps.verifyNavigation(testData.navigation.news.url)
    })

    it('should navigate to auto flea market page', () => {
        homeSteps.navigateToPage(testData.navigation.ab.title)
        homeSteps.verifyNavigation(testData.navigation.ab.url)
    })

    it('should navigate to rent page', () => {
        homeSteps.navigateToPage(testData.navigation.rent.title)
        homeSteps.verifyNavigation(testData.navigation.rent.url)
    })

    it('should navigate to services page', () => {
        homeSteps.navigateToPage(testData.navigation.services.title)
        homeSteps.verifyNavigation(testData.navigation.services.url)
    })

    it('should navigate to flea market page', () => {
        homeSteps.navigateToPage(testData.navigation.fleaMarket.title)
        homeSteps.verifyNavigation(testData.navigation.fleaMarket.url)
    })

    it('should navigate to forum page', () => {
        homeSteps.navigateToPage(testData.navigation.forum.title)
        homeSteps.verifyNavigation(testData.navigation.forum.url)
    })

    it('should compare 2 different products',() => {
        homeSteps.navigateToPage(testData.navigation.catalog.title)
        catalogSteps.navigateToCategory(testData.catalog.categoryName)
        catalogSteps.navigateToSubCategory(testData.catalog.subCategoryName)
        catalogSteps.navigateToProductCategory(testData.catalog.productCategoryName)
        catalogSteps.markProductToCompare(0)
        // const prod1 = catalogSteps.getProductName(0)
        const prod1 = ""
        catalogSteps.markProductToCompare(1)
        // const prod2 = catalogSteps.getProductName(1)
        const prod2 = ""
        catalogSteps.openCompareForm()
        catalogSteps.verifyCompareForm(testData.compare.url, prod1, prod2)
    })

})
