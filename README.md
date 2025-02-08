# Number Classification API

This API classifies a number by checking if it is prime, perfect, Armstrong, odd, or even. It also returns a fun fact about the number.

## API Endpoint

`GET /api/classify-number?number=<number>`

### Example Response (200 OK):

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## Example Response (400 Bad Request):

{
"number": "alphabet",
"error": true
}
