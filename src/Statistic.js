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

const getStatistic = (list) => {
    console.log(list)
    let result={};
    let arrResult=[];
    let sortResult={};
    let finalArr=[]
    
    for(let item in list){
        console.log(list[item])
        for(let vacansy in vacansies){
            if(item===vacansy){
                for(let skill in vacansies[vacansy]){
                    if(result[skill]){
                        result[skill]+=vacansies[vacansy][skill]*list[item]
                    }
                    else{
                        result[skill]=vacansies[vacansy][skill]*list[item]
                    }
                }
            }  
        }
    }
    
    for(let item in result){
        arrResult.push({
            item:item,
            value:result[item]
        });
    }
    arrResult.sort((one, two) => {
        return two.value-one.value
    }).map((item) => {
        sortResult[item.item]=item.value;
    })
    
    for(let key in sortResult){
        finalArr.push(key+'('+sortResult[key]+') ')
    }
    
    return finalArr;
    
}

export default getStatistic;
