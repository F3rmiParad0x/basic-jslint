const helloWorld = 3;
if (helloWorld === 3) {
    console.log('hello');
}

if (helloWorld !== 3)
{
    console.log('hello');
}

function testFuntion() {
    const localVar = 'test';
    var x = 1;
    const y = 3;
    const t = 1
    let sum = 0;
    const z = 1;

    sum = x + y + t;
    console.log(sum);

    if (localVar) {
        console.log(localVar);
    }


}



testFuntion();
