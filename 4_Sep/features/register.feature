# Feature: Student Registration Form
 
#   Scenario: Successfully register a student with valid details
 
#     Given I am on the Student Registration Form page
 
#     When I enter "harsh" in the Name field
#     And I enter "hero@gmail.com" in the Email field
#     And I select "Male" as the Gender
#     And I enter "9876543210" in the Mobile field
#     And I enter "2002-08-15" as the Date of Birth
#     And I enter "engligh" in the Subjects field
#     And I select "Sports" as a Hobby
#     And I enter "Bhagalpur, Bihar" in the Current Address field
#     And I select "Uttar Pradesh" as the State
#     And I select "Lucknow" as the City
#     And I click the Login button
 
#     Then the registration form should be submitted successfully
 
 






 Feature: Form Feature
 
 
  Scenario Outline: Successful form submission with valid data
    Given the user is on the form page
    When the user fills out the form with <name>, <email>, <gender>, <mobile>, <dob>, <subject>, <hobbies>, <currentAddress>, <state>, and <city>
    Then the form should be submitted successfully
 
    Examples:
      | name     | email                | gender | mobile     | dob      | subject | hobbies | currentAddress | state | city |
      | John D   | john.d@example.com   | Male   | 1234567890 | 29122002 | Math    | Reading | 123 Main St    | NCR   | Agra |