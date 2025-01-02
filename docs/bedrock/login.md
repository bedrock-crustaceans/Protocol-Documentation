---
mentions:
    - akashic-records-of-the-abyss
    - theaddonn
    - Lompandi
---

# Login

The login packet is sent after the RequestNetworkSetting packet, 
It contains two part:
 - Network protocol version
 - Connection request string

## Network protocol version
- This field contains the protocol version the client is using, 
which is used to double-check if the client is not changing network version since it send the RequestNetworkSetting packet


## Connection request string
- This field is more interesting, it contains raw string in this format:
```json
{
  "chain": [
    "eyJhbGciOiJFUzM4NCIsIng1dSI6Ik1IWXdFQVlIS29aSXpqMENBUVlGSzRFRUFDSURZZ0FFc2N6Vnh1RG54cEQyRXF5cUswSFUvWHRKYnRGcTVudHFVcGlQYi9lTTdwZWxFb1NoM2lqS1puTTJ0NkxhRE1PelhQMDE1cC93c2p0aGhMam50aEszS0JqMWdNOFZoOHAxUlJWWGIweFNGVTJoY1dEM1RwU2NCRDlWazhxblBPaEgifQo.eyJjZXJ0aWZpY2F0ZUF1dGhvcml0eSI6dHJ1ZSwiZXhwIjoxNzM1NTE3MjM4LCJpZGVudGl0eVB1YmxpY0tleSI6Ik1IWXdFQVlIS29aSXpqMENBUVlGSzRFRUFDSURZZ0FFQ1JYdWVKZVREcU5SUmdKaS92bFJ1ZkJ5dS8yRzBpMkVidDZZTWFyNVFYL1IwRElJeXJKTWNVcHJ1SzRRdmVUZkpTVHAzU2hscTRHazM0Y0QvNEdVV3drdjBEVnV6ZXVCK3RYaWphN0hCeGlpMDNOSERiUEFEMEFLbkxyMndkQXAiLCJuYmYiOjE3MzUzNDQzNzh9Cg.Q-ZsAgG7f_LJbuv1Q0L6T2EpLVo3MYTmNMrM_VoG55mZMaAuzM5WV8U7eoVaJxbbNIMIQGpU5K2AwYTrLUVRTY3gg2sU6NZ21SjIuHiRfvxXHc_s5f3Ygw3o6M77wlSC",
    "eyJ4NXQiOiJsQjgwV2tIY0RnV1ctRWItbGw4dmtwZ05rZjAiLCJ4NXUiOiJNSFl3RUFZSEtvWkl6ajBDQVFZRks0RUVBQ0lEWWdBRUNSWHVlSmVURHFOUlJnSmkvdmxSdWZCeXUvMkcwaTJFYnQ2WU1hcjVRWC9SMERJSXlySk1jVXBydUs0UXZlVGZKU1RwM1NobHE0R2szNGNELzRHVVd3a3YwRFZ1emV1Qit0WGlqYTdIQnhpaTAzTkhEYlBBRDBBS25McjJ3ZEFwIiwiYWxnIjoiRVMzODQifQ.eyJuYmYiOjE3MzUzNDQzNzgsInJhbmRvbU5vbmNlIjotNjgwODY0NDgyMTM1NzY5NDMyNywiaXNzIjoiTW9qYW5nIiwiZXhwIjoxNzM1NTE3MjM4LCJjZXJ0aWZpY2F0ZUF1dGhvcml0eSI6dHJ1ZSwiaWF0IjoxNzM1MzQ0NDM4LCJpZGVudGl0eVB1YmxpY0tleSI6Ik1IWXdFQVlIS29aSXpqMENBUVlGSzRFRUFDSURZZ0FFaUg1ejdoSmRYS2dJOCtxc0hJM3RyU1RKb2VSMGxhRnE1L2xveExhZUxyOGhEcE9IVkgxbXAzTUFmSzZjTFZLREFYeXFmSnhYaHNGenFEZnlyeFR5QnZ1NXBMNzhrSzJMZmhkRnpGcEdycDVmQyttelBiWDNHUmp2V09VMHFtK2kifQ.0DBOgQYVV2heeTWJA1AUdnw3mLQi63tpyTpEBnAFpLqra5PsGAsl5Kk2HweasOyA4-b47JzAqLy5qi9LEguy-5nJcUIF0lJeoS9d5hcEnMhfO-By9VeTbjCRsMXWyRX7",
    "eyJ4NXQiOiJ0TEYyeWFnc0VNTHBpQjMxbDRYXy1qV21GUE0iLCJ4NXUiOiJNSFl3RUFZSEtvWkl6ajBDQVFZRks0RUVBQ0lEWWdBRWlINXo3aEpkWEtnSTgrcXNISTN0clNUSm9lUjBsYUZxNS9sb3hMYWVMcjhoRHBPSFZIMW1wM01BZks2Y0xWS0RBWHlxZkp4WGhzRnpxRGZ5cnhUeUJ2dTVwTDc4a0syTGZoZEZ6RnBHcnA1ZkMrbXpQYlgzR1JqdldPVTBxbStpIiwiYWxnIjoiRVMzODQifQ.eyJuYmYiOjE3MzUzNDU1NDMsImV4dHJhRGF0YSI6eyJpZGVudGl0eSI6ImYwNDQ3ZmEzLTM5YzItMzg5ZS1hOTU4LTU0N2VmYzg2Yjc0NSIsImRpc3BsYXlOYW1lIjoiSUxvdmVNeWNyYWZ0MTIzIiwiWFVJRCI6IjI1MzU0Mjc4OTUyMjIxMDgiLCJ0aXRsZUlkIjoiODk2OTI4Nzc1Iiwic2FuZGJveElkIjoiUkVUQUlMIn0sInJhbmRvbU5vbmNlIjotNTg2OTY3NTk2NTg0ODA4NjE5NCwiaXNzIjoiTW9qYW5nIiwiZXhwIjoxNzM1NDMyMDAzLCJpYXQiOjE3MzUzNDU2MDMsImlkZW50aXR5UHVibGljS2V5IjoiTUhZd0VBWUhLb1pJemowQ0FRWUZLNEVFQUNJRFlnQUVzY3pWeHVEbnhwRDJFcXlxSzBIVS9YdEpidEZxNW50cVVwaVBiL2VNN3BlbEVvU2gzaWpLWm5NMnQ2TGFETU96WFAwMTVwL3dzanRoaExqbnRoSzNLQmoxZ004Vmg4cDFSUlZYYjB4U0ZVMmhjV0QzVHBTY0JEOVZrOHFuUE9oSCJ9.uBELeimXUfbG_TbJPo_p93r9SPEGiMP7RA_tAUUw-amDhtOq76e9DsqKf1Qu3a6fJHzZmxfUCczqeLZshfBQbnFpieXAqjYHK396IdRsGANQpKdiz8CtrmEBP1f5GYKe"
  ]
}
```
The whole data is in a json and there's only one key which is 
the "chain"

The chain contains array of jwts, and the receiver follow these step to decrypt the JWT

Let make an example, assuming we have a single JWT string:

```c++
eyJhbGciOiJFUzM4NCIsIng1dSI6Ik1IWXdFQVlIS29aSXpqMENBUVlGSzRFRUFDSURZZ0FFc2N6Vnh1RG54cEQyRXF5cUswSFUvWHRKYnRGcTVudHFVcGlQYi9lTTdwZWxFb1NoM2lqS1puTTJ0NkxhRE1PelhQMDE1cC93c2p0aGhMam50aEszS0JqMWdNOFZoOHAxUlJWWGIweFNGVTJoY1dEM1RwU2NCRDlWazhxblBPaEgifQo.eyJjZXJ0aWZpY2F0ZUF1dGhvcml0eSI6dHJ1ZSwiZXhwIjoxNzM1NTE3MjM4LCJpZGVudGl0eVB1YmxpY0tleSI6Ik1IWXdFQVlIS29aSXpqMENBUVlGSzRFRUFDSURZZ0FFQ1JYdWVKZVREcU5SUmdKaS92bFJ1ZkJ5dS8yRzBpMkVidDZZTWFyNVFYL1IwRElJeXJKTWNVcHJ1SzRRdmVUZkpTVHAzU2hscTRHazM0Y0QvNEdVV3drdjBEVnV6ZXVCK3RYaWphN0hCeGlpMDNOSERiUEFEMEFLbkxyMndkQXAiLCJuYmYiOjE3MzUzNDQzNzh9Cg.Q-ZsAgG7f_LJbuv1Q0L6T2EpLVo3MYTmNMrM_VoG55mZMaAuzM5WV8U7eoVaJxbbNIMIQGpU5K2AwYTrLUVRTY3gg2sU6NZ21SjIuHiRfvxXHc_s5f3Ygw3o6M77wlSC
```

JWT can be split into three main part, **header**, **payload**, and **signarure**
each is split by a dot (".")

1. The receiver decode the string before the first dot using base64, and then get something like this:

```json
{
  "alg": "ES384",
  "x5u": "MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEsczVxuDnxpD2EqyqK0HU/XtJbtFq5ntqUpiPb/eM7pelEoSh3ijKZnM2t6LaDMOzXP015p/wsjthhLjnthK3KBj1gM8Vh8p1RRVXb0xSFU2hcWD3TpScBD9Vk8qnPOhH"
}
```

2. The receiver decode the ```x5u``` field using base64 into sequence of bytes, the bytes will be the decryption key in DER format, the receiver then serialize the key and use it to decode rest part of the JWT, the fully decoded JWT will look something like this:

**Header:**
```json
{
  "alg": "ES384",
  "x5u": "MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEsczVxuDnxpD2EqyqK0HU/XtJbtFq5ntqUpiPb/eM7pelEoSh3ijKZnM2t6LaDMOzXP015p/wsjthhLjnthK3KBj1gM8Vh8p1RRVXb0xSFU2hcWD3TpScBD9Vk8qnPOhH"
}
```

**Payload:**
```json
{
  "certificateAuthority": true,
  "exp": 1735517238,
  "identityPublicKey": "MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAECRXueJeTDqNRRgJi/vlRufByu/2G0i2Ebt6YMar5QX/R0DIIyrJMcUpruK4QveTfJSTp3Shlq4Gk34cD/4GUWwkv0DVuzeuB+tXija7HBxii03NHDbPAD0AKnLr2wdAp",
  "nbf": 1735344378
}
```

3. In the last chain, after decoding the whole jwt, the payload part of the JWT will contains this special field ```extraData```,
the decoded JWT payload part will look like this:

```json
{
  "extraData": {
    "identity": "f0447fa3-39c2-389e-a958-547efc86b745",
    "displayName": "ILoveMycraft123",
    "XUID": "2535427895222108",
    "titleId": "896928775",
    "sandboxId": "RETAIL"
  },
  "randomNonce": -5869675965848087000,
  "iss": "Mojang",
  "exp": 1735432003,
  "iat": 1735345603,
  "identityPublicKey": "MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEsczVxuDnxpD2EqyqK0HUXtJbtFq5ntqUpiPb/eM7pelEoSh3ijKZnM2t6LaDMOzXP015p   wsjthhLjnthK3KBj1gM8Vh8p1RRVXb0xSFU2hcWD3TpScBD9Vk8qnPOhH"
}
```

Inside extra data, there is several fields:

## extraData

| Name              |Data                                                       | 
| ------------------|-----------------------------------------------------------|
| identity          | Identity value for the player                             |
| displayName       | The name that will be displayed on the server             |
| XUID              | Client XUID                                               |
| titleId           | The title id use to identify player                       |
| sandboxId         | usuage Unknown, default value: ```RETAIL```               |

Overall, the last chain is especially important as the server will get the information about the user from this field and also the encryption initialize key, which will be discuss in [encryption](encryption.md)