Feature: Authentication

  Scenario Outline: Login with valid details

    Given I am on locale <locale> home page with forced accepted cookies
    And in header I open sign in panel
    When I login with <email> and <password>
    And I wait until AuthPanel.SignInEmailInput is not displayed
    Then in header I see I am logged in

    Examples:
      | locale | email         | password |
      | nl     | update@me.com | 12345678 |
