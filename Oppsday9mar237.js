//class
//user defined data type

//class--object
//class--4--inheritance,polymorphism,abstraction
//encapsulation

//properties--accName.accNo,bal,lastFiveT
//Methods-deposite(),withdraw(),displayLastFiveT(),totalDeposite(),totaWithdraw()

class Bank{

    constructor(accName,accNo,bal){
        this.accName=accName
        this.accNo=accNo
        this.bal=bal
        this.transaction=[bal]
    }
    deposite(amount){
        this.bal=this.bal+amount
        this.transaction.push(amount)
        return this.bal
    }
    withdrawl(amount){
        if(this.bal>=amount){
        this.bal=this.bal-amount
        this.transaction.push(-amount)
        return this.bal
        }
        else{
            console.log('insufficient balance')
        }
    }
    totalDeposit(){
        return this.transaction.filter(function(el){
            return el>0
        })
        .reduce(function(acc,el){
            return acc+el
        },0)
    }
    totalWithdrawl(){
        return this.transaction.filter(function(el){
          return el<0
        })
        .reduce(function(acc,el){
            return acc+el
        },0)
    }

    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }
}

let chinmay=new Bank("chinmay",7,1000)
console.log(chinmay.withdrawl(500))
console.log(chinmay.deposite(500))
console.log(chinmay.withdrawl(100))
console.log(chinmay.deposite(200))
console.log(chinmay.withdrawl(100))
console.log(chinmay.withdrawl(500))
console.log(chinmay.lastFiveTransaction())
console.log(chinmay.totalDeposit())
console.log(chinmay.totalWithdrawl())


//tricky--------

let firstName="chinmay"
let lastName="deshpande"
console.log("My firstname is"+firstName+"lastName is"+lastName)
console.log(`My firstName is ${firstName}and My lastName is ${lastName}`)
console.log(`${67*7}`)
console.log(`${chinmay.totalDeposit()}`)
