const findTheOldest = function(people) {
    const result = people.reduce((array, person) => {
        const death = person.yearOfDeath, birth = person.yearOfBirth
        let age = 0
        if (death == undefined) {
            age = new Date().getFullYear() - birth
        }
        else {
            age = death - birth
        }
        array.push(age)
        return array
    },[])
    let oldest = Math.max.apply(null, result)
    oldest = result.indexOf(oldest)
    return people[oldest]
}


// Do not edit below this line
module.exports = findTheOldest;
