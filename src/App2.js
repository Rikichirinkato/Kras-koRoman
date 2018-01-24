let vacansies = {
	backEndDeveloper: {
		html: 8,
		php: 10,
		laravel: 9,
		javaScript: 6,
		git: 8,
		sql: 9
	},
	frontEndDeveloper: {
		html: 9,
		css: 8,
		javaScript: 8,
		git: 6,
		angular: 5
	},
	htmlDeveloper: {
		html: 10,
		css: 9,
		sass: 9,
		git: 6,
		jQuery: 8
	},
	nodeJsDeveloper: {
		html: 7,
		nodeJs: 9,
		npm: 8,
		expressJs: 9,
		mongoDB: 8,
		sql: 7
	},
	angularDeveloper: {
		angular: 10,
		javaScript: 9,
		mongoDB: 8,
		git: 8,
		html: 8,
		typeScript: 10,
	},
	fullStackDeveloper: {
		javaScript: 10,
		php: 10,
		nodeJs: 10,
		typeScript: 10,
		html: 10,
		angular: 10,
		react: 10,
		mongoDB: 10,
		sql: 10
	}
}

function getStatistic(positions) {
  let result = {};
  let resultSorted = {};
  
  //loop throught positions in function arg
  for(position in positions) {
    
    //loop throught vacansies data defined above
    for(vacansy in vacansies) {
      
      //find position we need in vacansies list
      if(vacansy === position) {
        
        for(skill in vacansies[vacansy]) {
          
          //write to result obj property value in vacansy or summ if it defined already
          result[skill] = result[skill] ? 
            result[skill] + vacansies[vacansy][skill] 
            : vacansies[vacansy][skill];
        }
      }
    }
  }

  // convert obj to array with keys {skill: 'string', value: 'number}
  let resultArr = [];
  
  for(skill in result) {
    resultArr.push({
      skill: skill,
      value: result[skill]
    });
  }
  
  //sort array by value property
  let sortedResultArr = resultArr.sort((skill1, skill2) => {
    return skill2.value - skill1.value;
  })
  
  // convert arr to object 
  sortedResultArr.map((item) => {
    resultSorted[item.skill] = item.value;
  })
  
  return resultSorted;
}

console.log(getStatistic({fullStackDeveloper: 2, angularDeveloper: 1 }));



