export class CatalogPage {

    categoryLinks() {
        return cy.get('div>.catalog-navigation-classifier')
    }

    subCategoryLinks() {
        return cy.get('.catalog-navigation-list__category[style="display: block;"]')
    }

    productCategoryLinks() {
        return cy.get('.catalog-navigation-list__aside-item_active .catalog-navigation-list__dropdown-list')
    }

    compareProductLabels() {
        return cy.get('.schema-product label')
    }

    productTitles() {
        return cy.get('.schema-product__title span')
    }

    compareButton() {
        return cy.get('.catalog-content>div:nth-child(4) a:nth-child(2)')
    }

    comparedProductTitles() {
        return cy.get('.product-table__row_top .product-summary__caption')
    }

    clickCategoryLink(title) {
        catalogPage.categoryLinks().contains(title).click()
    }

    clickSubCategoryLink(title) {
        catalogPage.subCategoryLinks().contains(title).click()
    }

    clickProductCategoryLink(title) {
        catalogPage.productCategoryLinks().contains(title).click()
    }

    clickCompareProductLabel(index) {
        catalogPage.compareProductLabels().then(labels => {
            labels[index].click()
        })
    }

    getProductName(index) {
        catalogPage.productTitles().then(elems => {
            return elems[index].text()
        })
    }

    clickCompareButton() {
        catalogPage.compareButton().then(el => {
            cy.visit(el.attr("href"))
        })
    }

    getComparedProductName(index) {
        catalogPage.comparedProductTitles().then(elems => {
            return elems[index].text()
        })
    }
}

export const catalogPage = new CatalogPage()
