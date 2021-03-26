function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    var formText = document.getElementById('website').value
    Client.checkForWebsite(formText)
    const convertToJson = async (baseUrl = ' ', formText ) => {
        const serverResponse = await axios(baseUrl,
            {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formText),
            }).then (res => res.json)
            }
    

    if(checkForWebsite(formText))
    {
        let submit = document.getElementById("submit-button")   

    console.log("::: Form Submitted :::")
    post('http://localhost:8081/evaluate', {fetchedUrl: submittedUrl} )
       
   
    .then(function(receivingData) {
        document.getElementById('results').innerHTML = receivingData.message
    })
    }
}
export { handleSubmit }
 