// src/controllers/numberController.js
const {
  isPrime,
  isArmstrong,
  sumOfDigits,
  getFunFact,
} = require("../utils/numberUtils");

const classifyNumber = async (req, res) => {
  const { number } = req.query;

  // Input validation: must be a number
  if (isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);

  // Calculate properties
  const is_prime = isPrime(num);
  const is_perfect = num === sumOfDigits(num); // (Note: Perfect number logic may need adjustment)
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  const digit_sum = sumOfDigits(num);

  try {
    let fun_fact = await getFunFact(num);

    // If the number is Armstrong, override the fun fact with a custom message.
    if (isArmstrong(num)) {
      // Generate the explanation text dynamically:
      const digits = num.toString().split("");
      // Create a string like "3^3 + 7^3 + 1^3" for the given number.
      const poweredDigits = digits
        .map((d) => `${d}^${digits.length}`)
        .join(" + ");
      fun_fact = `${num} is an Armstrong number because ${poweredDigits} = ${num}`;
    }

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
