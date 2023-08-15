console.log('This is separate JS file');

// options 2
const iAmGreen = document.getElementById('i-am-green');
iAmGreen.onclick = amGreen;

function amGreen() {
    document.body.style.backgroundColor = 'green'
}

// options 3
function iAmGray() {
  document.body.style.backgroundColor = "gray";
}

// options 3 direct function

const violetBg = document.getElementById('i-am-violet');
violetBg.onclick = function iAmViolet() {
    document.body.style.backgroundColor = 'violet';
}

//  options 4

const pinkBg = document.getElementById('i-am-pink');
pinkBg.addEventListener('click', iAmPink);

function iAmPink() {
    document.body.style.backgroundColor = 'pink';
}

// options 4 inline function

const cadetblueBg = document.getElementById("i-am-cadetblue");
cadetblueBg.addEventListener('click', function amCadetblue() {
    document.body.style.backgroundColor = 'cadetblue'
})


// options 4 er final version which will be used widely
document.getElementById('i-am-gold').addEventListener('click', function() {
    document.body.style.backgroundColor = 'gold'
})