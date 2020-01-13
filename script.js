window.onload = () => {
    const scripts = [...document.getElementsByTagName("script")],
        reg = [/jivosite/i, /callibri/i],
        reg0 = /callback.onlinepbx/i;


    scripts.forEach(script => {
        const find = reg.find(elem => elem.test(script.outerHTML));
        const findPbx = reg0.test(script.outerHTML);


        if (find != undefined) {
            const idInterval = setInterval(() => {

                //remove jdiv
                let jdiv = [...document.getElementsByTagName("jdiv")];
                if (jdiv.length > 0) {
                    jdiv.forEach(element => {
                        element.remove();
                        console.log("remove jdiv");
                    })
                    clearInterval(idInterval);
                }

                //remove callibri
                let callibri = document.getElementById("callibri_soc");
                if (callibri != undefined) {
                    callibri.remove();
                    clearInterval(idInterval);
                    console.log("callibri");
                }

                //clearInterval(idInterval);
            }, 100)
        }

        //remove onlinepbx
        if (findPbx) {
            script.outerHTML = "";

        }
    })
}