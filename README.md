# nodePasswordGenerator
UNH Bootcamp Week 10 HW

### Requirements:
- NodeJS
- Inquirer
- ES6 JS Classes
- Character options: Special Characters (!,@,$,%), Numbers, Lowercase letters, Uppercase letters.

### Instructions:
1. Refactor your previous password generator assignment to be a Command Line Interface (CLI) using Node, Inquirer, and ES6 Classes.
2. Your application should prompt a user for their desired password length and character options. 
3. Your CLI should _not_ have procedural code, or code that is not a method on a class.

### Approach 
I decided to utilize two classes. The Generator class takes in an object and generates a password based on the objects properties. The Controller class runs Inquirer, creates an instance of the Generator class and also prints the password to the screen. 


