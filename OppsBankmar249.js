//Bank acount

//mayuri==>
//accName,accNumber,branch,bal
//deposite(),withdrawl(),transaction(),totalDeposite(),totalWithdrawl()

class Bank{
    constructor(accName,accNo,branch,bal){
        this.accName=accName
        this.accNo=accNo
        this.branch=branch
        this.bal=bal
        this.transaction=[]
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
            console.log('insufficient Balance')
        }
    }
    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }
    totalDepositeA(){
        return this.transaction.filter((el)=>{
            return el>0
        }).reduce((acc,el)=>{
            return acc+el
        },0)
    }
    totalWithdrawA(){
        return this.transaction.filter(function(el){
            return el<0
        }).reduce(function(acc,el){
            return acc+el
        },0)
    }
}

let mayuri= new Bank("mayuri",123567,"sinnar",2000)
console.log(mayuri)
mayuri.deposite(200)
mayuri.withdrawl(500)
mayuri.deposite(400)
mayuri.withdrawl(50)
mayuri.deposite(220)
mayuri.withdrawl(300)
mayuri.withdrawl(900)
mayuri.deposite(200)
mayuri.deposite(400)
console.log(mayuri.transaction)
let tran=mayuri.lastFiveTransaction()
console.log(tran)

console.log(mayuri.totalDepositeA())
console.log(mayuri.totalWithdrawA())
