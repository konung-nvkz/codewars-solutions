/*FIXME: Get Full Name
DESCRIPTION:
source: imgur.com
The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.
*/
class Dinglemouse{

    constructor(firstName, lastName){
        this._firstName=firstName;
        this._lastName=lastName;
    }
    
    getFullName(){
        return `${this._firstName} ${this._lastName}`.trim();
    }
    
}

/*In summary, this code defines a class called Dinglemouse with a constructor 
that sets two properties (_firstName and _lastName) based on two arguments passed to it.
The class also has a method called getFullName() that returns a formatted string 
containing the full name of the Dinglemouse instance.*/