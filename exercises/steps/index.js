// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

     let string = ''
    // let i = 2

    // for(let i = 0; i < n; i++) {
    //     string += '#'
    // }

    // console.log(string)

    

    // console.log()

    for(let i = 0; i <  n; i++) {
        let string = ''
        for(let j = 0; j < n; j++) {
            if( i >= j) {
                string += '#'
            }
            else{
                string += ' '
            }
        }
        console.log(string)
    }

   


    
}

steps(5)

module.exports = steps;
