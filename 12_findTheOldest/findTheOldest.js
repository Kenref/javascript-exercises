const findTheOldest = function(people) {
    const result = people.reduce((array, person) => {
        const death = person.yearOfDeath, birth = person.yearOfBirth
        let age = death - birth
        array.push(age)
        return array
    },[])
    let oldest = Math.max.apply(null, result)
    oldest = result.indexOf(oldest)
    return people[oldest]
}


// Do not edit below this line
module.exports = findTheOldest;


    //   const people = [
    //     {
    //       name: "Carly",
    //       yearOfBirth: 1942,
    //       yearOfDeath: 1970,
    //     },
    //     {
    //       name: "Ray",
    //       yearOfBirth: 1962,
    //       yearOfDeath: 2011,
    //     },
    //     {
    //       name: "Jane",
    //       yearOfBirth: 1912,
    //       yearOfDeath: 1941,
    //     },
    //   ]