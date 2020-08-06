const jsencrypt = require('../lib/jsencrypt.min').instance

jsencrypt.setPrivateKey(`-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQDKmOvTaySthoMQHR7eESEwKFKwyJoD1PhEjXxIZL5xxtgdvzq8
dOo8torfJMhRlzumUc6SSHR3AweWONAEtJstJtbL6kJEsSA3DJ0YMoCERbimqyZU
Da7MpR7PwprQKPg6Tnvd4hjV2tjIZfT4JMXe4IKeJGT9cG4Lrswcuk9pWQIDAQAB
AoGAZtVh9ikPL+jzw40UauFE+D2vYz4fNsy1y44JRHGmXPfyIH89IAU0E+cP7B2u
dAOQamZhtMyEGRh3lF937ruBe2zdaFEwUHZGZoPzNIHCYUtn7KBR0ebL8763CCTL
qbXDzehj9rYvXxj+LSzuCnLbooUAwFZMceJ6OWiRVrct8nUCQQDzzldEHkRa1rcQ
AwOg+qEHnSxSeNlSm5x8B/OWgNHDY2w52wrnUGrtcSFgRIxk39tXQyKYBV5+C4G+
6nuNtsWfAkEA1LrzOXqml5JJyF13A1ojAu7Nvl+4NxvhU9lHj3qEmaOlHU1msPLv
RsoKqJtolGi1Uay4tsdnm2oDJalRQdy+BwJAdeq5eD+vTcQFfCAJFEXDtlwFQMok
SfjrQW3TGVqqmXavtHfFmUTiwn5x5w6gXHWMr3LP+3i1T/8evIjKQys//wJAarbN
xIvOfkKYWLbqOPhCj/oTo+iIlLybsGBTEZq4YgpBjg2B8kor1isMZcBwGeLc8nfe
wXIOe1wW8BGb/ZoqiQJADlssI/G2g2bAT0cMr/j019omO5JX4Atp5Y8+35L5ExDX
sHlOR/osD/oQvERzHKhENyh1/PJQ5rAzQLyHOFPCAg==
-----END RSA PRIVATE KEY-----`)

function decrypt(text) {
  return jsencrypt.decrypt(text)
}

module.exports = {
  decrypt
}