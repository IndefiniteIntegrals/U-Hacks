import requests


payload = {
	'recid' : 'manish'
}
r = requests.post('http://localhost:4000/api/v1/flowxo',params=payload)

print(r.text)
print(r.url)