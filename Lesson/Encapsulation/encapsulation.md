# Encapsulation

## What is Encapsulation?

In TypeScript, Encapsulation is a technique that is used to hide certain class members, such as properties and methods, from outside the class. This allows you to protect your data from being modified or accessed in unintended ways.

## Keywords

The keywords used for Encapsulation are:

| Keyword   | Definition                                                                                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Public    | members can be accessed from anywhere, both inside and outside the class. This is the default accessibility level for class members.                                           |
| Private   | members can only be accessed from within the class where they are declared. Attempting to access a private member from outside the class will result in a compile-time error.  |
| Protected | members are similar to private members, but they can also be accessed from derived classes (i.e., classes that inherit from the class where the protected member is declared). |

## Example

Go to **_encapsulation.ts_** to view an example
