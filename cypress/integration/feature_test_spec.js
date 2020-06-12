describe('Feature Test', () => {
  it('Visits Acebook', () => {

    // const random = Math.floor(Math.random() * 1000) + 1;
    const random = 817
    const username = `username${random}`;
    const name = `Person ${random}`;
    const email = `person${random}@example.com`;
    const password = `12345`

    cy.visit('/')

    // cy.contains('Signup').click()
    
    // cy.get('input[name="username"]').type(username);
    // cy.get('input[name="name"]').type(name);
    // cy.get('input[name="email"]').type(email);
    // cy.get('input[name="password"]').type(password);
    // cy.get('input[name="password_confirmation"]').type(password);
    // cy.contains('Submit').click();

    cy.contains('Login').click()
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.contains('Submit').click().pause();

    cy.visit('/')
    cy.get('textarea[name="message"]').type(`I am number ${random}`)
    cy.contains('Post').click().pause();;

    // cy.visit('/')
    // cy.contains('Edit').click();
    // cy.get('textarea[name="message"]').type(`I am not a number, I am a free robot!`)
    // cy.contains('Save').click().pause();

    cy.visit('/')
    cy.contains('Delete').click().pause();

    cy.visit('/')
    cy.contains('Sign Out').click().pause();

//
  })
})
