document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'cur_live_cPaORkYvJUeNMtVJxHX4t5MwAmjwCk8djmuO2wHd';
    const apiUrl = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=EUR,USD,CAD,INR`;

    // Select DOM elements
    const fromAmountInput = document.getElementById('fromAmount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toAmountInput = document.getElementById('toAmount');
    const toCurrencySelect = document.getElementById('toCurrency');
    const convertedAmountInput = document.getElementById('convertedAmount');
    const convertButton = document.getElementById('convertButton');

    let rates = {};

    // Fetch exchange rates from API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            rates = data.data;
            populateCurrencySelectors();
        })
        .catch(error => console.error('Error fetching data:', error));

    // Populate currency selectors
    function populateCurrencySelectors() {
        const currencies = Object.keys(rates);
        currencies.forEach(currency => {
            const optionFrom = document.createElement('option');
            optionFrom.value = currency;
            optionFrom.textContent = currency;
            fromCurrencySelect.appendChild(optionFrom);

            const optionTo = document.createElement('option');
            optionTo.value = currency;
            optionTo.textContent = currency;
            toCurrencySelect.appendChild(optionTo);
        });

        fromCurrencySelect.value = 'USD'; // Default value
        toCurrencySelect.value = 'EUR';   // Default value
    }

    // Conversion function
    function convertCurrency() {
        const fromAmount = parseFloat(fromAmountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(fromAmount) || !rates[fromCurrency] || !rates[toCurrency]) {
            convertedAmountInput.value = 'Invalid input';
            return;
        }

        // Convert the amount to base currency (USD in this case)
        const amountInBase = fromAmount / rates[fromCurrency].value;
        // Convert base currency to target currency
        const convertedAmount = amountInBase * rates[toCurrency].value;

        convertedAmountInput.value = convertedAmount.toFixed(2);
    }

    // Add event listener to button
    convertButton.addEventListener('click', convertCurrency);
});
