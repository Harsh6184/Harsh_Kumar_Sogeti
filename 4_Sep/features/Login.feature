# Feature: Login
 
#     Login functionality validation
 
# Scenario: Verify login with valid credentails
 
# Given User opens the application
# When User enters credentails
# Then User should login successfully
 
#  @smoke
# Scenario Outline: Verify invalidlogin with multiple users
 
# Given User opens the application
# When User enters "<username>" and "<password>"
# Then User should error message displayed


  
# Examples:
 
#     | username                  | password       |
#     | standard_user             | secret_sauce   |
#     | problem_user              | secret_sauce   |
#     | performance_glitch_user   | secret_sauce1  |
#     | error_user                | secret_sauce1  |
#     | visual_user               | secret_sauce1  |
 




#  @smoke
#  Scenario Outline: Verify login with multiple users successfully

#  Given User opens the application
#  When User enters "<username>" and "<password>"
#  Then User should login successfully


 
# Examples:
 
#     | username                  | password       |
#     | standard_user             | secret_sauce   |
#     | problem_user              | secret_sauce   |
#     | performance_glitch_user   | secret_sauce1  |
#     | error_user                | secret_sauce1  |
#     | visual_user               | secret_sauce1  |
