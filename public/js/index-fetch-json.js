document.getElementById('xhr-fetch-client-data')
    .addEventListener('click', e => {
        fetch('client-data.json')
            .then( response => response.json() )
            .then( clientData => {
                document.getElementById('xhr-client-name')
                    .innerText = clientData.clientName;
                document.getElementById('xhr-account-balance')
                    .innerText = clientData.accountBalance;
            })
    });