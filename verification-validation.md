## Verification vs. Validation

### What's the Difference?

- **Verification**:

  - This is all about making sure the product is built correctly according to the specs. It is checking if I am following the instructions properly during development.
  - **Example**: The unit tests in `task.unit.test.ts` are verification. They check if things like creating and updating tasks work as they should according to the requirements.

- **Validation**:
  - This is about making sure the final product meets what the users actually need. It’s like checking if the finished product does what it's supposed to do.
  - **Example**: The integration tests in `app.integration.test.ts` are validation. They make sure that the whole app works correctly when everything is put together, like checking if tasks are categorized and deadlines work as expected.

### How My Tests Do Both

- **Unit Tests for Verification**:

  - These tests make sure each part of the app works right according to the plan. For example, ensuring that a task is created with the right details.

- **Integration Tests for Validation**:
  - These tests make sure that when all the parts of the app are combined, everything works smoothly and meets user expectations, like making sure tasks are handled correctly in lists.

### Wrap-Up

In short, my tests cover both angles: making sure we’re building the app right (verification) and making sure the app is doing what users need (validation).
