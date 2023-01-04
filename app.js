const DB = {
	levels: [
		{ id: '1', name: 'junior' },
		{ id: '2', name: 'middle' },
		{ id: '3', name: 'senior' },
	],
	skills: [
		{ id: '1', name: 'html/css' },
		{ id: '2', name: 'js' },
		{ id: '3', name: 'nodejs' },
		{ id: '4', name: 'react' },
		{ id: '5', name: 'TypeScript' },
	],
	users: [
		{
			id: '1',
			levelId: '3',
			name: 'Andriy Petrash',
			skills: ['1', '2', '3', '4', '5'],
		},

		{
			id: '3',
			levelId: '2',
			name: 'Oleg',
			skills: ['1', '2'],
		},
	],
}

const findUserById = (id) => {

	const user = DB.users.find(el => el.id ===id);
	if(!user) return 'user not exist';

		DB.levels.filter(item => {
		if(item.id === user.levelId) {
			user.position = item.name;
			delete user.levelId;
		}
	})
	
	user.skills = user.skills.map(item => {

		skill = DB.skills.find(skill => skill.id === item )
		if(!skill) {return}

		return skill.name
	})

	return user;
}





// const oleg = findUserById('2')
// console.log(oleg)
/*
{
	name: 'Oleg',
	position: 'junior',
	skills: ['html/css', 'js'],
}
*/

// const andriy = findUserById('1')
// console.log(andriy)
/*
{
    name: 'Andriy Petrash',
	  position: 'senior',
	  skills: ['html/css', 'js', 'nodejs', 'react', 'TypeScript'],
}
*/

const notFoundUser = findUserById('2')
console.log(notFoundUser)
// /*
// "Not Found"
// */

