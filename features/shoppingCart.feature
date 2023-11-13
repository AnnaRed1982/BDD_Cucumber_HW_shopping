# Напишіть тестовий сценарій у стилі Gherkin, 
# який описує процес пошуку та купівлі товару 
# у вашому улюбленому інтернет магазині, 
# та валідує успішність завершення покупки.

Feature: Searching for and buying product

Scenario: To find and buy product

Given A Customer searches for a "<product>" "<available>" on website 

When A Customer buys a product

Then The purchase stastus is "successful"

Examples:
    | product | available |
    | orange  |   true    | 
    | apple   |   true    | 
    | kiwi    |   false   | 






# Given the following products are added to the shopping cart:
# | Product   | Price |
# | Laptop    | 1000  |
# | Headphones| 100   |
# | Mouse     | 20    |

# When I calculate the total cost

# Then the total cost should be 1120