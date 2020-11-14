let myform = document.getElementById('myform');    // Form id myform selection
let targetimage = document.getElementById('targetimage');    // Car image source targetimage selection
let inputrange = document.querySelectorAll('.slider');    // All image filter bar selection
myform.addEventListener('submit', function(e){    // target Form id myform
    let urlimage = document.getElementById('onlineurl');    // Image URL box selection
    let urlimageval = urlimage.value;    // putting the Value inside Image URL box
    if(urlimageval.length){
        targetimage.setAttribute('src',urlimageval);    // If there is Image url so that image src will show
        urlimage.value = '';            // Image url remaining issue solve by making it blank
    }
    
    e.preventDefault();   // event object to stop Page Reload 
    console.log('done');
});

for(let i=0; i<=inputrange.length-1; i++ ){             // for Loop added to cover all inputrange filters
    inputrange[i].addEventListener('input', editimage);     // to trigger input Event
}

function editimage(){
    // Get id for Input Type Range
    let br = document.getElementById('br');
    let con = document.getElementById('con');
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');
    let opa = document.getElementById('opa');
    

    // Set Value for Input Type Range
    let brval = br.value;
    let conval = con.value;
    let gsval = gs.value;
    let blurval = blur.value;
    let huerotateval = huerotate.value;
    let sepiaval = sepia.value;
    let opaval = opa.value;
    

    // Change Style of targetimage where concatenating Value & Parameter
    targetimage.style.filter = 'brightness('+brval+'%) contrast('+conval+'%) grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+huerotateval+'deg) sepia('+sepiaval+'%) opacity('+opaval+'%)';
}

    // Reset Settings
let sliderform = document.getElementById('slider-form');     // Form element selected
sliderform.addEventListener('reset', function(){             // Event added
    sliderform.reset();             // Reset Method applied
    setTimeout(function(){          // Call Back function added to solve the blur issue
        editimage();
    },0)                            // Call Back after 0 sec
})

