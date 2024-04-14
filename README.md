# appscript-gcp-secret-manager

A library to access secret in GCP.

## How to use

This library is already released and public.

Script ID: 1jxwx2uq2K4EsTNBaGmh0EbSLTgmEEUGCkJmNdP9NXyqcgZudVi6lWmZ7

Note: To access gcp, add the flollowing code in appscript.json

```
"oauthScopes": [
    "https://www.googleapis.com/auth/script.external_request",
    "https://www.googleapis.com/auth/cloud-platform",
    "https://www.googleapis.com/auth/spreadsheets.currentonly",
    "https://www.googleapis.com/auth/spreadsheets"
  ]
```

### Use exisitng library

```javascript
value = ReadTokenFromSecretManagerWithEndpoint("projects/<yours>/secrets/<yours>")
```

### Create a new library

Create your own library and use the code in this repo.
