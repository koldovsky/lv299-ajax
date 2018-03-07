document.getElementById('xhr-get-client-data')
    .addEventListener('click', e => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const clientData = JSON.parse(xhr.responseText); 
                document.getElementById('xhr-client-name')
                    .innerText = clientData.clientName;
                document.getElementById('xhr-account-balance')
                    .innerText = clientData.accountBalance;
            }    
        }
        xhr.open('GET', 'client-data.json?r='+Math.random(), true);
        xhr.send();
    });