describe('Main App Tests', () => {
  it('should load the page with expected elements', () => {
    cy.visit("/");

    cy.get('[data-cy="question-form-text-area"]').should('be.visible');
    cy.get('[data-cy="question-form-send-button"]').should('contain', 'Send');
  });

  it('should send a question and receive an answer', () => {
    cy.fixture('answer.json').then((answer) => {
      cy.intercept('POST', '/api/askQuestion', answer).as('askQuestion');

      const response = answer.data.choices[0].message.content;

      cy.visit("/");

      cy.get('[data-cy="question-form-text-area"]').type('Where do potatoes come from?');
      cy.get('[data-cy="question-form-send-button"]').click();

      cy.wait('@askQuestion');

      cy.get('[data-cy="answer-list-message-2"]').should('contain', response);
    });
  });
});
