let items = document.getElementsByClassName('item');
for (const item in items) {
    items[item].onclick = () => {
        let image = items[item].nextElementSibling;
        if (image.style.display == 'block') {
            image.style.display = 'none';
        } else {
            image.style.display = 'block';
        }
    }         
}

//**************fun fact***************
const source = document.getElementById('funFact').innerHTML;
const body = document.body;
let numOfClicks = 0;
body.addEventListener('click', () => {  
    numOfClicks += 1;
    document.getElementById('funFact').innerHTML = `<span style="color: tomato;">Fun fact:</span> you have clicked <span style="color: tomato;">${numOfClicks}</span> times.`;
});
