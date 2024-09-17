# Backstop Test Example
This is a contrived and simple example of how a backstop test can be configured when markup has changed but the test should pass.

An example use case for this would be a scenario where a site is being migrated and should match 1:1 but markup will be different from the source site and the new site. 

In a simple test there would not be a requirement for this, but if actions are being taken on the page such as clicking a button to test that the rendered elements match after interaction, this test has scripting that allows defining different click selectors for the reference and test scenarios.

Additionally, this includes a contrived example of having image differences so that if the content in the production environment gets out of sync with the staging environment, the tests can still pass.

## Conducting test
Currently this test is hard coded to a file path. This will need to be changed in the backstop/backstop.json file.

After updating the URLs in the backstop.json file navigate to the backstop folder in terminal and run `npm i` to install the modules then `npm run reference` to prepare the reference images and finally `npm test` to run the test.
