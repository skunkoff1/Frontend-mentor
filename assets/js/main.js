let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');
let workDisplay = 0;

daily.addEventListener('click', () => {
    const dailys = document.getElementsByClassName('daily');
    const weeklys = document.getElementsByClassName('weekly');
    const monthlys = document.getElementsByClassName('monthly');

    for (const elmt of dailys) {
        elmt.style.display = "flex";
    }
    for (const elmt of weeklys) {
        elmt.style.display = "none";
    }
    for (const elmt of monthlys) {
        elmt.style.display = "none";
    }
})

weekly.addEventListener('click', () => {
    const dailys = document.getElementsByClassName('daily');
    const weeklys = document.getElementsByClassName('weekly');
    const monthlys = document.getElementsByClassName('monthly');

    for (const elmt of dailys) {
        elmt.style.display = "none";
    }
    for (const elmt of weeklys) {
        elmt.style.display = "flex";
    }
    for (const elmt of monthlys) {
        elmt.style.display = "none";
    }
})

monthly.addEventListener('click', () => {
    const dailys = document.getElementsByClassName('daily');
    const weeklys = document.getElementsByClassName('weekly');
    const monthlys = document.getElementsByClassName('monthly');

    for (const elmt of dailys) {
        elmt.style.display = "none";
    }
    for (const elmt of weeklys) {
        elmt.style.display = "none";
    }
    for (const elmt of monthlys) {
        elmt.style.display = "flex";
    }
})

let work = document.getElementById('work');
let workButton1 = work.getElementsByTagName('img')[1];
let workButton2 = work.getElementsByTagName('img')[2];
let workButton3 = work.getElementsByTagName('img')[3];

workButton1.addEventListener('click', () => {
    let daily = work.getElementsByTagName('div')[2];
    let weekly = work.getElementsByTagName('div')[6];
    let monthly = work.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "flex";
    monthly.style.display = "none";
})
workButton2.addEventListener('click', () => {
    let daily = work.getElementsByTagName('div')[2];
    let weekly = work.getElementsByTagName('div')[6];
    let monthly = work.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "none";
    monthly.style.display = "flex";
})
workButton3.addEventListener('click', () => {
    let daily = work.getElementsByTagName('div')[2];
    let weekly = work.getElementsByTagName('div')[6];
    let monthly = work.getElementsByTagName('div')[10];
    daily.style.display = "flex";
    weekly.style.display = "none";
    monthly.style.display = "none";
})

let play = document.getElementById('play');
let playButton1 = play.getElementsByTagName('img')[1];
let playButton2 = play.getElementsByTagName('img')[2];
let playButton3 = play.getElementsByTagName('img')[3];

playButton1.addEventListener('click', () => {
    let daily = play.getElementsByTagName('div')[2];
    let weekly = play.getElementsByTagName('div')[6];
    let monthly = play.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "flex";
    monthly.style.display = "none";
})
playButton2.addEventListener('click', () => {
    let daily = play.getElementsByTagName('div')[2];
    let weekly = play.getElementsByTagName('div')[6];
    let monthly = play.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "none";
    monthly.style.display = "flex";
})
playButton3.addEventListener('click', () => {
    let daily = play.getElementsByTagName('div')[2];
    let weekly = play.getElementsByTagName('div')[6];
    let monthly = play.getElementsByTagName('div')[10];
    daily.style.display = "flex";
    weekly.style.display = "none";
    monthly.style.display = "none";
})

let study = document.getElementById('study');
let studyButton1 = study.getElementsByTagName('img')[1];
let studyButton2 = study.getElementsByTagName('img')[2];
let studyButton3 = study.getElementsByTagName('img')[3];

studyButton1.addEventListener('click', () => {
    let daily = study.getElementsByTagName('div')[2];
    let weekly = study.getElementsByTagName('div')[6];
    let monthly = study.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "flex";
    monthly.style.display = "none";
})
studyButton2.addEventListener('click', () => {
    let daily = study.getElementsByTagName('div')[2];
    let weekly = study.getElementsByTagName('div')[6];
    let monthly = study.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "none";
    monthly.style.display = "flex";
})
studyButton3.addEventListener('click', () => {
    let daily = study.getElementsByTagName('div')[2];
    let weekly = study.getElementsByTagName('div')[6];
    let monthly = study.getElementsByTagName('div')[10];
    daily.style.display = "flex";
    weekly.style.display = "none";
    monthly.style.display = "none";
})

let exercise = document.getElementById('exercise');
let exerciseButton1 = exercise.getElementsByTagName('img')[1];
let exerciseButton2 = exercise.getElementsByTagName('img')[2];
let exerciseButton3 = exercise.getElementsByTagName('img')[3];

exerciseButton1.addEventListener('click', () => {
    let daily = exercise.getElementsByTagName('div')[2];
    let weekly = exercise.getElementsByTagName('div')[6];
    let monthly = exercise.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "flex";
    monthly.style.display = "none";
})
exerciseButton2.addEventListener('click', () => {
    let daily = exercise.getElementsByTagName('div')[2];
    let weekly = exercise.getElementsByTagName('div')[6];
    let monthly = exercise.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "none";
    monthly.style.display = "flex";
})
exerciseButton3.addEventListener('click', () => {
    let daily = exercise.getElementsByTagName('div')[2];
    let weekly = exercise.getElementsByTagName('div')[6];
    let monthly = exercise.getElementsByTagName('div')[10];
    daily.style.display = "flex";
    weekly.style.display = "none";
    monthly.style.display = "none";
})

let social = document.getElementById('social');
let socialButton1 = social.getElementsByTagName('img')[1];
let socialButton2 = social.getElementsByTagName('img')[2];
let socialButton3 = social.getElementsByTagName('img')[3];

socialButton1.addEventListener('click', () => {
    let daily = social.getElementsByTagName('div')[2];
    let weekly = social.getElementsByTagName('div')[6];
    let monthly = social.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "flex";
    monthly.style.display = "none";
})
socialButton2.addEventListener('click', () => {
    let daily = social.getElementsByTagName('div')[2];
    let weekly = social.getElementsByTagName('div')[6];
    let monthly = social.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "none";
    monthly.style.display = "flex";
})
socialButton3.addEventListener('click', () => {
    let daily = social.getElementsByTagName('div')[2];
    let weekly = social.getElementsByTagName('div')[6];
    let monthly = social.getElementsByTagName('div')[10];
    daily.style.display = "flex";
    weekly.style.display = "none";
    monthly.style.display = "none";
})


let selfCare = document.getElementById('self-care');
let selfCareButton1 = selfCare.getElementsByTagName('img')[1];
let selfCareButton2 = selfCare.getElementsByTagName('img')[2];
let selfCareButton3 = selfCare.getElementsByTagName('img')[3];

selfCareButton1.addEventListener('click', () => {
    let daily = selfCare.getElementsByTagName('div')[2];
    let weekly = selfCare.getElementsByTagName('div')[6];
    let monthly = selfCare.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "flex";
    monthly.style.display = "none";
})
selfCareButton2.addEventListener('click', () => {
    let daily = selfCare.getElementsByTagName('div')[2];
    let weekly = selfCare.getElementsByTagName('div')[6];
    let monthly = selfCare.getElementsByTagName('div')[10];
    daily.style.display = "none";
    weekly.style.display = "none";
    monthly.style.display = "flex";
})
selfCareButton3.addEventListener('click', () => {
    let daily = selfCare.getElementsByTagName('div')[2];
    let weekly = selfCare.getElementsByTagName('div')[6];
    let monthly = selfCare.getElementsByTagName('div')[10];
    daily.style.display = "flex";
    weekly.style.display = "none";
    monthly.style.display = "none";
})