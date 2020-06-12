describe('Feature Test', () => {
  it('Visits Acebook', () => {

    const random = Math.floor(Math.random() * 1000) + 1;
    // const random = 817
    const username = `username${random}`;
    const name = `Person ${random}`;
    const email = `person${random}@example.com`;
    const password = `12345`

    cy.visit('/').pause();

    cy.contains('Signup').click()
    
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="name"]').type(name);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="password_confirmation"]').type(password).pause();
    cy.contains('Submit').click();

    cy.contains('Login').click();
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password).pause();
    cy.contains('Submit').click();

    // cy.visit('/').pause();
    cy.get('textarea[name="message"]').type(`I am number ${random}`).pause();
    cy.contains('Post').click();

    cy.visit('/').pause();
    cy.contains('Edit').click();
    cy.get('textarea[name="editMessage"]').type(`I am not a number, I am a free robot!`).pause();
    cy.contains('Save').click();

    cy.visit('/').pause();
    cy.contains('Delete').click();

    cy.visit('/').pause();
    cy.contains('Sign Out').click();

//
  })
})
