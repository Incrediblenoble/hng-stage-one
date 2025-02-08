// Function to check if the number is prime
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function to check if the number is Armstrong
const isArmstrong = (num) => {
  const digits = num.toString().split("");
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), digits.length),
    0
  );
  return sum === num;
};

// Function to calculate the sum of digits
const sumOfDigits = (num) => {
  return num
    .toString()
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
};

// Function to get a fun fact from Numbers API
const getFunFact = async (num) => {
  try {
    const response = await fetch(`http://numbersapi.com/${num}?json`);
    const data = await response.json();
    return data.text; // Fun fact text
  } catch (error) {
    throw new Error("Error fetching fun fact");
  }
};

// Export the functions
module.exports = { isPrime, isArmstrong, sumOfDigits, getFunFact };
