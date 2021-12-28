let carrier = document.querySelector("#carrier");
let digger = document.querySelector("#digger");
let hydro = document.querySelector("#hydro");
let tracker = document.querySelector("#tracker");
let solar = document.querySelector("#solar");
let watch = document.querySelector("#watch");
let weather = document.querySelector("#weather");
let robotimg = document.querySelector(".robot-img");

function carrierbg(){
	robotimg.classList.add("carrier-bg");
}

function carrierremove(){
	robotimg.classList.remove("carrier-bg");
}

function diggerbg(){
	robotimg.classList.add("digger-bg");
}

function diggerremove(){
	robotimg.classList.remove("digger-bg");
}

function hydrobg(){
	robotimg.classList.add("hydro-bg");
}

function hydroremove(){
	robotimg.classList.remove("hydro-bg");
}

function trackerbg(){
	robotimg.classList.add("tracker-bg");
}

function trackerremove(){
	robotimg.classList.remove("tracker-bg");
}

function solarbg(){
	robotimg.classList.add("solar-bg");
}

function solarremove(){
	robotimg.classList.remove("solar-bg");
}

function watchbg(){
	robotimg.classList.add("watch-bg");
}

function watchremove(){
	robotimg.classList.remove("watch-bg");
}

function weatherbg(){
	robotimg.classList.add("weather-bg");
}

function weatherremove(){
	robotimg.classList.remove("weather-bg");
}

carrier.addEventListener("mouseover", carrierbg);
carrier.addEventListener("mouseout", carrierremove);

digger.addEventListener("mouseover", diggerbg);
digger.addEventListener("mouseout", diggerremove);

hydro.addEventListener("mouseover", hydrobg);
hydro.addEventListener("mouseout", hydroremove);

tracker.addEventListener("mouseover", trackerbg);
tracker.addEventListener("mouseout", trackerremove);

solar.addEventListener("mouseover", solarbg);
solar.addEventListener("mouseout", solarremove);

watch.addEventListener("mouseover", watchbg);
watch.addEventListener("mouseout", watchremove);

weather.addEventListener("mouseover", weatherbg);
weather.addEventListener("mouseout", weatherremove);


