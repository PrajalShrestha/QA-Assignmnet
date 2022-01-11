/// <reference types ='cypress'/>
describe("Search anykeyword on daraz website", () => {

    it("Visit daraz page",() => {
        cy.visit("https://www.daraz.com.np") //visit https://www.daraz.com.np website
        cy.document().should('have.property','charset').and('eq','UTF-8') // should have charset ="utf-8"
        cy.title().should('include','Online Shopping in Nepal | Best Deals, Prices & Discounts - Daraz.com.np') // title should be "Online Shopping in Nepal | Best Deals, Prices & Discounts - Daraz.com.np"
        cy.get('.yatra-header').find('.search-box--2I2a').should('be.visible').type('Laptop') //find class ".search-box--2I2a" from parent class ".yatra-header" and type keyword "laptop"
        cy.get('.search-box__button--1oH7').contains('SEARCH').click() //click on search button
        cy.url().should('include','/catalog/?q=Laptop') //url should contain "/catalog/?q=Laptop" keyword
        cy.get('.c2P49E').find('.c1DXz4').contains('Laptop').should('be.visible') //to verify the search results is eual to laptop
    });
});