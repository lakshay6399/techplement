const strings = [
    "Write it on your heart that every day is the best day in the year", "I get up every morning and it’s going to be a great day. You never know when it’s going to be over, so I refuse to have a bad day", "Today’s goals: Coffee and kindness. Maybe two coffees, and then kindness", "An early-morning walk is a blessing for the whole day.", "Write it on your heart that every day is the best day in the year",
    
];
function showRandomString() {
    const randomIndex = Math.floor(Math.random() * strings.length);
    const randomString = strings[randomIndex];
    document.getElementById('display').textContent = randomString;
}
document.getElementById('showStringBtn').addEventListener('click', showRandomString);