describe('Form Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    //getttttttersss
    const firstText = () => cy.get('input[name=first_name');
    const lastText = () => cy.get('input[name=last_name]');
    const emailText = () => cy.get('input[name=email]');
    const passText = () => cy.get('input[name=password]');
    const roleSelect = () => cy.get('select[name=role]');
    const termBox = () =>cy.get('input[name=termsOfService]');
    const submitBtn = () => cy.get("button[id='submitBtn']");
// type=checkBox
    it('submit button starts disabled', () => {
        submitBtn().should('be.disabled');
    })

    //put in inputs
    it('can type in the inputs', () => {
        firstText()
            .should('have.value', '')
            .type('Jordan')
            .should('have.value', 'Jordan');
        lastText()
            .should('have.value', '')
            .type('Cabanada')
            .should('have.value', 'Cabanada');
        emailText()
            .should('have.value', '')
            .type('pogchamp@gmail.com')
            .should('have.value', 'pogchamp@gmail.com');
        passText()
            .should('have.value', '')
            .type('Secretphrase21')
            .should('have.value', 'Secretphrase21');
        termBox()
            .check();
    })

    it('Empty', () => {
        firstText()
            .type('Casey')
            .clear();
        lastText()
            .type('Harding')
            .clear();
        emailText()
            .type('lambda@og.com')
            .clear();
        passText()
            .type('12onGbruh')
            .clear();
        termBox()
            .check().uncheck();

    })

})