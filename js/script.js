
//Rest operator

let getMyName=(...names)=>{
    console.log(names)
};

getMyName('Anil',"raju",`Mukesh`,20,5.6,['Rahul']);

//News Line
//sentance :- Kangana Ranaut reacts to Elon Musk confessing he is a fan of PM Modi during their US meet.

let z = ['Kangana',"Ranaut",`reacts`,"to","Elon",'Musk'];

var y = [...z,'confessing',"he",`is`,"a","fan",'of','PM',"Modi",`during`,"their","US",'meet.']

console.log(z);
console.log(y);