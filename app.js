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
		{ id: '4', name: 'TypeScript' },
	],
	users: [
		{
			id: '1',
			levelId: '3',
			name: 'Andriy Petrash',
			skills: ['1', '2', '3', '4', '5'],
		},

		{
			id: '2',
			levelId: '1',
			name: 'Oleg',
			skills: ['1', '2'],
		},
	],
}

const findUserById = (id) => {
	if(!DB.users[id-1]) return '"Not Found"';

    const user = {};

    user.name = DB.users[id-1].name;
    let levelId = DB.users[id-1].levelId;
    let skills = DB.users[id-1].skills;



    DB.levels.forEach(item=>{

        if(item.id == levelId) {
            user.position = item.name;
        }

    })


    user.skills = [];
    skills.forEach(item=>{

        DB.skills.forEach(skill=>{
            if(skill.id == item ){user.skills.push(skill.name)};
        })    
    })
    
    return user;
}




const oleg = findUserById('2')
console.log(oleg)
/*
{
	name: 'Oleg',
	position: 'junior',
	skills: ['html/css', 'js'],
}
*/

const andriy = findUserById('1')
console.log(andriy)
/*
{
    name: 'Andriy Petrash',
	  position: 'senior',
	  skills: ['html/css', 'js', 'nodejs', 'react', 'TypeScript'],
}
*/

const notFoundUser = findUserById('33')
console.log(notFoundUser)
// /*
// "Not Found"
// */