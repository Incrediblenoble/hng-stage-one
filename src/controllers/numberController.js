const {
  isPrime,
  isArmstrong,
  sumOfDigits,
  getFunFact,
} = require("../utils/numberUtils.js");

// Function to classify number and return details
const classifyNumber = async (req, res) => {
  const { number } = req.query;

  // Input validation
  if (isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number, 10);

  // Calculate number properties
  const is_prime = isPrime(num);

  // Ensure that 0 (or negative) is not classified as perfect.
  // Note: This logic uses sumOfDigits to check "perfect", but typically,
  // perfect numbers are defined as numbers equal to the sum of their proper divisors.
  // Here, we follow the provided logic and add a check that num must be > 0.
  const is_perfect = num > 0 && num === sumOfDigits(num);

  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  // For digit_sum, use the absolute value so that negative inputs are handled properly.
  const digit_sum = sumOfDigits(Math.abs(num));

  // Get fun fact from Numbers API
  try {
    const fun_fact = await getFunFact(num);

    return res.status(200).json({
      number: num,
      is_prime,
      is_perfect,
      properties,
      digit_sum,
      fun_fact,
    });
  } catch (err) {
    return res.status(500).json({ error: "Error fetching fun fact." });
  }
};

module.exports = { classifyNumber };
