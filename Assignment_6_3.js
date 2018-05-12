var temperatureInCelsius = 40;

// Convert to C
var celsiusToFahrenheit = temperatureInCelsius * 9;
celsiusToFahrenheit /= 5;
celsiusToFahrenheit += 32;

// Print result
console.log("Temperature of " + temperatureInCelsius + " celsius, will be " + celsiusToFahrenheit + " fahrenheit");

var temperatureInFahrenheit = 104;

// Convert to F
var fahrenheitToCelsius = temperatureInFahrenheit - 32;
fahrenheitToCelsius *= 5;
fahrenheitToCelsius /= 9;

// Print result
console.log("Temperature of " + temperatureInFahrenheit + " fahrenheit, will be " + fahrenheitToCelsius + " celsius");