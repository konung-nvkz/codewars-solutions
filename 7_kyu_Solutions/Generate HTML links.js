/*Generate HTML links
Generate HTML links
We need a HTML menu.... but writing HTML over and-over-again is boooring... Let's just generate it instead!

Task:
Write a function generateMenu() with the following inputs/output:

Inputs:

menuItems: An array of objects (with url and text properties), which represents our menu items

Output:

A string of HTML containing an anchor tag for each element of menuItems (with the appropriate href attribute and text content)
*/
function generateMenu(menuItems) {
    let html = '';
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        html += `<a href="${menuItem.url}">${menuItem.text}</a>`;
    }
    return html;
}

let generateMenu = arr => arr.reduce((c, v) => c += `<a href="${v.url}">${v.text}</a>`, '');

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {

var inputs = [
    {
        url:"http://www.google.com",
        text:"10^100"
    },
    {
        url:"#codewars",
        text:"codewars"
    },
    {
        url:"#q",
        text:"query"
    },
    {
        url:"#a",
        text:"ans"
    },
    {
        url:"#123",
        text:123
    }
]

Test.expect(generateMenu([]) === "", "Does not handle empty array correctly");
Test.expect(generateMenu(inputs.slice(0,1)) === "<a href=\"http://www.google.com\">10^100</a>", "Does not handle basic url");
Test.expect(generateMenu(inputs.slice(1,2)) === "<a href=\"#codewars\">codewars</a>", "Does not handle hash url");
Test.expect(generateMenu(inputs.slice(2,4)) === "<a href=\"#q\">query</a><a href=\"#a\">ans</a>", "Does not handle multiple items");
Test.expect(generateMenu(inputs.slice(4)) === "<a href=\"#123\">123</a>", "Does not handle non-string text property values");
  });
});
