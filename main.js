
// צרו פונקציה המחזירה מס רנדומ לי בין 0 ל10

// function printRandomNum() {
//   var rnd = Math.floor(Math.random()*10)
//   console.log(rnd)
// }
// printRandomNum()







// צרו פונקציה שמקבלת כארגומנט מס ומחזירה מס רנדומלי מ0 ועד המספר שהתקבל

// function printRandomNum(num) {
//   var rnd = Math.floor(Math.random()*num)
//  return rnd
// }
// console.log(printRandomNum(10))









// צרו פונקציה שמקבלת מספר מהמשתמש ויוצרת מספר רנדומלי בין 0-10 אם המספר זהה מדפיסה הודעה בהצלחה אחרת הודעת כישלון
// function getRandomNumFromUser() {
//   var numUser=+prompt("enter random num")
//   var make=Math.floor(Math.random()*10);
//   console.log(make)
//   if(numUser==make){
//     console.log("success")
//   }else{
//     console.log("fail")
//   }
// }
// getRandomNumFromUser()







//צרו פונקציה שמאכלסת מערך של 10 איברים במספרים רנדומליים בין 0-100
// function opulatedTenNum () {
//   var newArray=[]
//   for(var i = 0; i <10; i++){
//     newArray.push(Math.floor(Math.random()*100))
//   }
//   console.log(newArray)
// }
// opulatedTenNum()




// צרו פונקציה המקבלת מספר מהמשתמש ומייצרת מספר רנדומלי בין 0 ך10 והפונקציה מחזירה את המספר הגדול.
// function numFromUser() {
//   var numUser =+prompt("enter number")
//   var rndNum=Math.floor(Math.random()*10)
//   console.log(rndNum)
//  console.log(Math.max(numUser,rndNum)) 
// }
// numFromUser()




// function minNum() {
//   var rnd = Math.floor(Math.random()*10)
//   for (var i=0; i<5; i++){
//     var getFuser=+prompt("enter num")
//     var min = Math.min(getFuser,rnd)
//   }
//   console.log(min)
// }
// minNum()



// 55
// function getEvenNumFromUser() {
//   var getUser=+prompt()
//   var rnd = Math.floor(Math.random()*100)
//   if(getUser%2==0){
//     return Math.min(getUser,rnd)
//   }else{
//     return Math.max(getUser,rnd)
//   }
//   // console.log(rnd,getUser)
// }
// console.log(getEvenNumFromUser())




// 56
// function opulatedArray() {
//   var myArray=[]
//   var rndNum=Math.floor(Math.random()*365)
//   for(var i = 0; i <rndNum;i++){
//       myArray.push(Math.floor(Math.random()*873))
//   }
//   console.log(myArray)

// }
// opulatedArray()



// 57
// function getNum(getArray) {
//   getArray=[5,8,1,3,4,9]
//   var rnd = Math.floor(Math.random())
//   for(var i=0; i< getArray.length; i++){
//     getArray+=rnd
//     console.log(rnd)
//   }
// }
// getNum()