function ReadTokenFromSecretManagerWithEndpoint(endpoint) {
  let token, response;
  token = ScriptApp.getOAuthToken();
  response = UrlFetchApp.fetch(endpoint, {
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
    }
  });
  var decodedAPIKey = Utilities.base64Decode(JSON.parse(response.getContentText())['payload']['data']);
  var apiKey = Utilities.newBlob(decodedAPIKey).getDataAsString()
  return apiKey;
}

function ReadfromSecretManager(address) {
  return ReadTokenFromSecretManagerWithEndpoint('https://secretmanager.googleapis.com/v1/' + address + '/versions/latest:access')
}