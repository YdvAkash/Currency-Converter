# Currency Converter

A lightweight browser-based currency converter built with HTML, CSS, and vanilla JavaScript. It retrieves the latest exchange-rate data from CurrencyAPI and lets you convert an amount between the currencies configured in the app.

## Features

- Fetches exchange rates from CurrencyAPI.
- Populates the source and target currency selectors from the returned rates.
- Calculates and displays the converted amount to two decimal places.
- Uses a simple static frontend with no build step.

## Run locally

1. Ensure the app has a valid CurrencyAPI configuration in `app.js`.
2. Open `index.html` in a modern browser.
3. Enter an amount, choose the source and target currencies, then select **Convert**.
4. Keep an internet connection available so the app can request current exchange rates.

The currencies available in the selectors depend on the currencies requested by the API configuration in `app.js`.

## Troubleshooting

- **The currency selectors are empty:** Check the browser console and verify that the CurrencyAPI request succeeds and returns the expected data.
- **The result says "Invalid input":** Enter a valid numeric amount and select currencies whose rates were returned by the API.
- **The API request fails:** Check connectivity and API account/usage limits.

## Security note

A credential embedded in client-side JavaScript can be read by anyone who visits the site. For a publicly deployed app, avoid exposing a private API key in `app.js`; use a small server-side proxy or another provider-supported approach to keep credentials off the client.

## Project files

- `index.html` — page structure and form controls.
- `style.css` — page styling.
- `app.js` — exchange-rate request, currency selector setup, and conversion logic.
