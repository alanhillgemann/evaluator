import {validateURL} from "./urlChecker"

const handleSubmit = (e) => {
    e.preventDefault()
    const evaluateURL = document.getElementById('url').value
    const evaluateButton = document.getElementById('evaluate')
    const form = document.getElementById('form')
    const errorMessage = document.getElementById('error')
    document.getElementById('results__holder').innerHTML = ''
    if (errorMessage) {
        errorMessage.remove()
    }
    if (validateURL(evaluateURL)) {
        setTimeout(() => {
            document.getElementById('evaluate').disabled = true
        }, 0)
        fetch('/evaluate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                evaluateURL: evaluateURL
            })
        })
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then((json) => {
            evaluateButton.disabled = false
            document.getElementById('results__holder').innerHTML = `
            <ul>
                <li>model: ${json.model}</li>
                <li>score_tag: ${json.score_tag}</li>
                <li>subjectivity: ${json.subjectivity}</li>
                <li>confidence: ${json.confidence}</li>
                <li>irony: ${json.irony}</li>
            </ul>`
        })
        .catch((err) => {
            console.error(err)
            evaluateButton.disabled = false
            form.insertAdjacentHTML(
            'afterbegin', `<div id="error" role="alert">
            <p>Something went wrong. Try again later.</p></div>`
            )
        })
    } else {
        form.insertAdjacentHTML(
        'afterbegin', `<div id="error" role="alert">
        <p>Invalid URL. Must be 'http://...'</p></div>`
        )
    }
}

export {handleSubmit}
