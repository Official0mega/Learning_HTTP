function getDomaainNameFromURL(url)
{
	const urlObj = new URL(url)
	return urlObj.hostname
}

// don't touch brlow this line

const bootdevURL = 'https://boot.dev/learn/learn-python'
const domainName = getDomainNameFromURL(bootdevURL)
console.log('The domain name for ${bootdevURL} is ${domainName}`)

