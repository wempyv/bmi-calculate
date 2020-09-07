const form = document.getElementById('form')
const yourName = document.getElementById('name')
const yourHeight = document.getElementById('your-height')
const yourWeight = document.getElementById('your-weight')
const result = document.getElementById('result')
const tips = document.getElementById('tips')
const sectionResult = document.querySelector('.section-results')
const btn = document.querySelector('.btn')


form.addEventListener('keyup',function(){
    btn.disabled = !yourName.value
    btn.disabled = !yourHeight.value
    btn.disabled = !yourWeight.value
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let total = yourWeight.value / (yourHeight.value * yourHeight.value / 100) * 100
    const num = total.toFixed(1)
    calculate(num, yourName.value)
})

function calculate(results, yourName) {

    sectionResult.style.visibility = 'visible'

    if (results <= 18.5) {
        result.innerHTML = `<p class="content">Hi ${yourName}, your body mass index
        score is <span>${results}</span> , it means your weight is less 😔</p>`

        tips.innerHTML = `<p class="content">We recommend you to eat foods that contain
        lots of calories and healthy nutrients
        good luck and recalculate your body mass index 😉</p>`
    } else if (results >= 18.5 && results <= 22.9) {
        result.innerHTML = `<p class="content">Hi ${yourName}, your body mass index
        score is <span>${results}</span> , Your weight is normal  🥳</p>`

        tips.innerHTML = `<p class="content">${yourName} , you must maintain a healthy weight, exercise regularly, maintain a healthy diet, and get adequate rest. stay happy ${yourName} and always lucky 😉</p>`
    } else if (results >= 23 && results <= 29.9) {
        result.innerHTML = `<p class="content">Hi ${yourName}, your body mass index
        score is <span>${results}</span> , it means you are overweight 😔</p>`

        tips.innerHTML = `<p class="content">${yourName} , you have to get more exercise, reduce calories in the food you eat, reduce sweet foods. I hope your weight returns to normal, good luck ${yourName} and don't forget to count your body index again 🥰</p>`
    } else {
        result.innerHTML = `<p class="content">Hi ${yourName}, your body mass index
        score is <span>${results}</span> , it means you are obese 😔</p>`

        tips.innerHTML = `<p class="content">${yourName} , We recommend you to diet, exercise regularly, reduce sweet foods, cheer up, don't give up, we are sure your weight will return to normal😉</p>`
    }
}
