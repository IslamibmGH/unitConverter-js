/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = (meter) => { return meter * 3.281 }
const feetToMeter = (feet) => { return feet / 3.281 }
const literToGallons = (liter) => { return liter * 0.264 }
const gallonToLiters = (gallon) => { return gallon * 3.785 }
const kiloToPounds = (kilo) => { return kilo * 2.204 }
const poundToKilos = (pound) => { return pound / 2.204 }

const inputNum = document.getElementById('input');
const convertBtn = document.getElementById('btn');
const cards = document.getElementById('cards');

convertBtn.addEventListener('click', function () {
    let value = Number(inputNum.value)
    let toFeet = meterToFeet(value).toFixed(3)
    let toGallons = literToGallons(value).toFixed(3)
    let toPounds = kiloToPounds(value).toFixed(3)
    let toMeters = feetToMeter(value).toFixed(3)
    let toLiters = gallonToLiters(value).toFixed(3)
    let toKilos = poundToKilos(value).toFixed(3)
    
    renderDom(value, toFeet, toGallons, toPounds, toMeters, toLiters, toKilos)
});

const renderDom = (value, toFeet, toGallons, toPounds, toMeters, toLiters, toKilos) => {
    const conversions =
        `
    <div id="card">
				<h4 id="cardTitle">Length (Meter/Feet)</h4>
				<p id="cardesult">${value} meters = ${toFeet} feet | ${value} feet = ${toMeters} meters</p>
	</div>
    <div id="card">
				<h4 id="cardTitle">Volume (Liters/Gallons)</h4>
				<p id="cardesult">${value} liters = ${toGallons} gallons | ${value} gallon = ${toLiters} liters</p>
			</div>
	<div id="card">
				<h4 id="cardTitle">Mass (Kilograms/Pounds)</h4>
				<p id="cardesult">${value} kilos = ${toPounds} pounds | ${value} pounds = ${toKilos} kilos</p>
	</div>
    `;
    cards.innerHTML = conversions; // Note: corrected from .innerHTML(conversions)
};