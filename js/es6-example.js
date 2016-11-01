// Variable swapping
let inRing = 'Hulk Hogan';
let onSide = 'The Rock';
console.log(inRing, onSide);
[inRing, onSide] = [onSide, inRing];
console.log(inRing, onSide);


// ---
// Destructuring Example
function tipCalc({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
    return total + (tip * total) + (tax * total);
}
const bill = tipCalc({ tip: 0.20, total: 200, tax: 5.4 });
console.log(bill);



const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib', 'Chops'];
for (const [i, cut] of cuts.entries()) {
   console.log(`${cut} is the ${i + 1} item`);
 }
