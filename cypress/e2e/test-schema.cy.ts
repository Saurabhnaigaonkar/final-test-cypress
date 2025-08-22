

context('Network Requests', () => {
  beforeEach(() => {
    // cy.visit('https://example.cypress.io/commands/network-requests')
  });

  describe('JSON Schema Plugin Demo', () => {
    it('generates schema for /todos/1 if missing', () => {
      cy.apiSchemaGenerate(
        'https://jsonplaceholder.typicode.com/todos/1',
        'users'
      );
    });

    it('validates schema for /todos/1 if exists', () => {
      cy.apiSchemaValidate(
        'https://jsonplaceholder.typicode.com/todos/1',
        'users'
      ).then((response: Cypress.Response<any>) => {
        cy.log(`Response: ${JSON.stringify(response.body)}`);
      });
    });

    it('forces schema update for /todos/1', () => {
      cy.apiSchemaCheck(
        'https://jsonplaceholder.typicode.com/todos/1',
        'users'
      );
    });

    // Example for a POST request
    it('create a new entry in posts', () => {
      cy.apiSchemaCheck(
        'https://jsonplaceholder.typicode.com/posts',
        'createPost',
        {
        update: false,
        requestOptions: {
          method: 'POST',
          body: {
            title: 'foo',
            body: 'bar',
            userId: 1
          },
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
        }
      );
    });
  });
});
