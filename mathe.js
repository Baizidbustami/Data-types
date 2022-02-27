
// const student ={
//   id:102,
//   name:'rj kibrea',
//   major:'mathematics',
//   money:5000,
//   subjects:['english', 
// 'economics','math:101', 'calculus'],
// bistFrind: {
//   name:'kundu',
//   major:'matheatics'
// },
// takeExam :function(expense,ali){
//   this.money = this.money - expense-ali;
//   return this.money;
// }
// }
// const mahi = student.takeExam(900,50);
// console.log(mahi);

const kibria ={
  id:102,
  name:'rj kibrea',
  major:'mathematics',
  money:5000,
  
treatDay :function(expense,boksis,tex){
  this.money = this.money - expense-boksis-tex
  console.log(this)
  return this.money;
}
}
const heroBalam = {
  id:102,
  money : 5000,
  name: 'Hero Balam'
}

// সেম কাজটা নিচে সর্টকার্ট Call apply ব্যবহার করে করা যায়
kibria.treatDay(100);
const heroTreatDey = kibria.treatDay.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(500);

call

kibria.treatDay.call(heroBalam,500,100,10)

Apply

kibria.treatDay.apply(heroBalam,[500,100,10])
