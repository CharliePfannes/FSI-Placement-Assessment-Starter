// HINT: You can delete this console.log after you no longer need it!
// console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Charles Pfannes" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = localStorage.getItem('gb');
if (gb === null) {
    gb = 0;
}else {
       gb = parseInt(gb)
       document.querySelector('#qty-gb').textContent = gb;
   } 
     // Gingerbread
     let cc = localStorage.getItem('cc');
     if (cc === null) {
        cc = 0;
     }else {
        cc = parseInt(cc)
            document.querySelector('#qty-cc').textContent = cc;
        }     // Chocolate Chip
        let sugar = localStorage.getItem('sugar');
        if (sugar === null) {
            sugar = 0;
        }else {
            sugar = parseInt(sugar)
               document.querySelector('#qty-sugar').textContent = sugar;
           }   // Sugar Sprinkle


//////total votes retrieved from local storage

           let totalVotes = document.querySelector('#qty-total');
totalVotes.textContent = gb + cc + sugar;
         
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// gb
document.getElementById('add-gb').addEventListener('click', function() {
    gb++;
    document.querySelector('#qty-gb').textContent = gb;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    localStorage.setItem('gb', gb);
    


    
   })

document.getElementById('minus-gb').addEventListener('click', function() {
    gb--;
    document.querySelector('#qty-gb').textContent = gb;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    localStorage.setItem('gb', gb);

})
    
//cc
document.getElementById('add-cc').addEventListener('click', function() {
    cc++;
    document.querySelector('#qty-cc').textContent = cc;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    localStorage.setItem('cc', cc);

    
   })

document.getElementById('minus-cc').addEventListener('click', function() {
    cc--;
    document.querySelector('#qty-cc').textContent = cc;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    localStorage.setItem('cc', cc);
})
//sugar
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++;
    document.querySelector('#qty-sugar').textContent = sugar;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    localStorage.setItem('sugar', sugar);
    
   })

document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar--;
    document.querySelector('#qty-sugar').textContent = sugar;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    localStorage.setItem('sugar', sugar);
})
    