/*Algorithmic predicament- Bug Fixing #9
Algorithmic predicament - Bug Fixing #9
Oh no! Timmy's algorithm has gone wrong! Help Timmy fix his algorithm!

Task
Your task is to fix Timmy's algorithm so it returns the group name with the highest total age.

You will receive two groups of `people` objects, with two properties `name` and `age`. The name property is a string, and the age property is a number.

Your goal is to calculate the total age of all people with the same name in both groups and return the name of the person with the highest total age. 
If two names have the same total age, return the first alphabetical name.
*/

//How it was:
/*
function highestAge(group1, group2){
  var highestName = {name:'',age:-1},
  newGroup = [],
  combGroup = group1.concat(group2);
    
  for(var i=0;i<=combGroup.length;i++)
    if(newGroup.indexOfProp('name',combGroup[i].name)!=-1)
      newGroup.push(combGroup[i])
    else  
      newGroup[newGroup.indexOfProp('name',combGroup[i].name)].age = combGroup[i].age;
  
  newGroup = newGroup.sort((p,c) => p.name > c.name ? -1 : p.name < c.name ? 1 : 0)

  for(var i=0;i<=newGroup.length;i++){
    if(newGroup[i].age < highestName.age || newGroup[i].name < highestName.name)
      highestName = newGroup[i];
  }
  
  return highestName.name;
}

Array.prototype.indexOfProp = function(prop, value){
  for(var i=0;i<=this.length;i++){
    if(this[i][prop] == value)
      return i;
  }
  return 0
}
*/
//rewritten code:
function highestAge(group1, group2) {
    const ageMap = {};

    // Combine both groups and sum ages based on names
    const combinedGroups = group1.concat(group2);
    for (const person of combinedGroups) {
        if (ageMap[person.name]) {
            ageMap[person.name] += person.age; // Add to existing age
        } else {
            ageMap[person.name] = person.age; // Initialize age
        }
    }

    let highestName = '';
    let highestAge = -1;

    // Determine the name with the highest total age
    for (const name in ageMap) {
        const currentAge = ageMap[name];
        if (currentAge > highestAge || (currentAge === highestAge && name < highestName)) {
            highestAge = currentAge;
            highestName = name;
        }
    }

    return highestName;
}

function highestAge(group1, group2) {
    // Initialize a variable to store the person with the highest age
    var highestName = { name: '', age: -1 }
    // Initialize an array to store unique people based on their names
    let newGroup = []
    // Concatenate group1 and group2 to create a combined group
    let combGroup = group1.concat(group2)

    // Loop through the combined group to accumulate ages based on names
    for (var i = 0; i < combGroup.length; i++) {
      // If the name is not in newGroup, add the person; otherwise, accumulate the age
        if (newGroup.indexOfProp('name', combGroup[i].name) === -1) {
            newGroup.push(combGroup[i])
        } else {
            newGroup[newGroup.indexOfProp('name', combGroup[i].name)].age += combGroup[i].age
        }
    }

    // Sort the newGroup alphabetically by names
    newGroup = newGroup.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    })

    // Loop through the sorted newGroup to find the person with the highest age
    for (var i = 0; i < newGroup.length; i++) {
        if (newGroup[i].age > highestName.age) {
        highestName = newGroup[i]
        }
    }

    // Return the name of the person with the highest age
    return highestName.name
    }

    // Prototype method to find the index of an element with a specific property value in an array
    Array.prototype.indexOfProp = function (prop, value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i][prop] === value) return i
    }

    return -1
}