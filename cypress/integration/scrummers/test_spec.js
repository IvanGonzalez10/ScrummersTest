/* global describe, it, cy */

describe("scrummers-test", function () {
  it("para probar si la app funciona", function () {
    cy.visit("/");
  });
  it("navegar a proyecto", function () {
    cy.visit("/project/");
    cy.get("div");
  });
  it("navegar al acerca de", function () {
    cy.visit("/about/");
    cy.get("div");
  });
  it("navegar a las tecnologias", function () {
    cy.visit("/technologies/");
    cy.get("div");
  });
  it("navegar con la NavBar a la home desde technologies", function () {
    cy.visit("/technologies/");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });
  it("navegar con la NavBar a la home desde project", function () {
    cy.visit("/project/");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });
  it("navegar con la NavBar a la home desde about", function () {
    cy.visit("/about/");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });
  it("navegar con el logo a la home", function () {
    cy.visit("/project/");
    cy.get("a").first().click();
    cy.url().should("include", "/");
  });
  it("navegar a un URL desconocido", function () {
    cy.visit("/gsgsfsf/");
    cy.get("div");
  });
});
