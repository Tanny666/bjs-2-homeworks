function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {

		return false;
	}

	return arr1.every((value, index) => value === arr2[index]);
}



function getUsersNamesInAgeRange(users, gender) {
	const averageAge = users
		.filter(user => user.gender === gender)
		.map(user => user.age)
		.reduce((sum, age, _, array) => sum + age / array.length, 0);

	return averageAge;
}