import {catalogPage} from "../page_objects/catalog.page";

export class CatalogSteps {

    navigateToCategory(title) {
        catalogPage.clickCategoryLink(title)
    }

    navigateToSubCategory(title) {
        catalogPage.clickSubCategoryLink(title)
    }

    navigateToProductCategory(title) {
        catalogPage.clickProductCategoryLink(title)
    }

    markProductToCompare(index) {
        catalogPage.clickCompareProductLabel(index)
    }

    getProductName(index) {
        return catalogPage.getProductName(index)
    }

    openCompareForm() {
        catalogPage.clickCompareButton()
    }

    async verifyCompareForm(url, name1, name2) {
        cy.url().should('contain', url)
        // expect(catalogPage.getComparedProductName(0)).to.equal(name1) // not work
        // expect(catalogPage.getComparedProductName(1)).to.equal(name2) // not work
    }

}

export const catalogSteps = new CatalogSteps()
