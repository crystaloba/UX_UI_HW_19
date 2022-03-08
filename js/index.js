document.querySelector('#myBtn');

const myBtn = document.getElementById('myBtn');

// ✅ Change button text on click
myBtn.addEventListener('click', function handleClick() {
    myBtn.textContent = 'Added!';
});
