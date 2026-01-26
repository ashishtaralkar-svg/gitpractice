

console.log("hi")
let a= 17268.83
console.log (a)
console.log(typeof(a))
let b= true
console.log(b)
console.log (typeof (b))
for (let k=1; k<=100;k++)
{
    if (k%2==0 && k%3==0)
    {
        console.log(k)
    }
}


let person={
    name:'ashish',
    lastname: 'taralkar',
    fullname: function()
    {
        console.log(this.name+this.lastname)

    }

}
console.log(person.fullname())
/*
person.gender='male'
delete person.gender

//person.name='taralkar'
console.log(person)
console.log(person.name)

console.log('name' in person)
for (let key in person)
{
    console.log(person[key])
}
*/