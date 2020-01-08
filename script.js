const scripts = [...document.getElementsByTagName("script")],
    reg = [/jivosite/i, /callback.onlinepbx/i];

//remove jdiv
scripts.forEach(script => {
    const find = reg.find(elem => elem.test(script.outerHTML))

    if (find != undefined) {
        const idInterval = setInterval(() => {
            let jdiv = [...document.getElementsByTagName("jdiv")];
            if (jdiv.length > 0) {
                jdiv.forEach(element => {
                    element.remove();
                })
                clearInterval(idInterval);
            }
        }, 100)
    }
})


// let jdiv = [...document.getElementsByTagName("jdiv")];
// console.log(jdiv);
// jdiv.forEach((element) => {
//     element.remove();
// })






// for (let i = 0; i < scripts.length; i++) {
//     if (reg0.test(scripts[i].outerHTML)) {
//         scripts[i].outerHTML = "";

//     }
// }
// console.log(scripts);




// let scripts = document.getElementsByTagName("script");
// let reg = /jivosite/i;
// let reg0 = /callback.onlinepbx/i;


// for (let i = 0; i < scripts.length; i++) {
//     if (reg.test(scripts[i].outerHTML)) {
//         console.log("here");
//         scripts[i].outerHTML = "";

//     }
// }
// console.log(scripts);

// let prm = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let number = 1;
//     }, 2000)
//     resolve(number);

// })

// prm.then(() => {
//     console.log("done", number)
// })


// [...document.getElementsByTagName('*')].forEach(e => {
//     e.className && e.className.match(/onpbxcb/) && e.className.match(/onpbxcb/)[0] != null && e.remove()
// })



// document.addEventListener('readystatechange', (e) => {
//     console.log(document.readyState)
// })