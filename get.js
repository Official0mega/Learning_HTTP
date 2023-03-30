const apiKey = GenerateKey()
const url = getURL()
const settings = getSettings()

const response = await fetch(url, settings)
const responseData = await response.json()

logItems(responseData)

//don't touch below this line


function getSettings() {
	return {
		method: 'GET'
		mode: 'cors'
		headers: {
			'X-API-Key': apiKey,
			'Content-Type': 'application/json'
		}
	}
}

function getURL() {
	return 'https://api.boot.dev/v1/courses_rest_api/learn
