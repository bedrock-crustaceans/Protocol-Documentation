---
mentions:
    - theaddonn
    - Lompandi
---

# Encryption

## Summary
The encryption of the MCBE protocol uses ECDH (Elliptic Curve Diffie–Hellman) for key exchange and AES256-GCM for generating key and encryption

# Key Exchange
The key exchange will start right after the login packet is received, the server will follow these step to initialize and start encryption:

Let say in the login packet, the last chain of the JWT is decoded into this:
```json
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
```

0. Before encryption, the server will prepare itself a pair of keys.

1. The server extract the value of the identityPublicKey and decode the key using base64 into sequence of bytes,
the bytes will be the peer public (or "shared public") key between the client and the server encoded in DER format.

2. The server compute the shared secret from its generated private key (normally in DER format) with the peer public key using secp384r1

3. The server now generate random bytes with the size of 16, and contact it with like shared secret before hashing the key:
```
Hash Seed = Random bytes + Shared secret
```

4. The server will now hash the key using Sha256, the hashed key will be the key used for encryption and decryption

5. The server will used hashed key output to initialize AES256-GCM, with the Nonce (or Initialize vector) from the first 16 bytes 
of the hashed key

# Bedrock dedicated server's implementation

In ```ServerNetworkHandler::handle(
    ServerNetworkHandler *this, const struct NetworkIdentifier *pNetworkIdentifier, const struct LoginPacket *pLoginPacket
)```: 
```c++
// Generate 16 byte random value
std::string key_random;

Crypto::Random::Random random;
random.fillData(key_random, 16);

// Fetch the last getIdentityPublicKey from the chain
identityPublicKey = Certificate::getIdentityPublicKey(certificate);

KeyManager keyManager(identityPublicKey, Crypto::Asymmetirc::System::EcSecp384r1);
PrivateKeyManager privateKeyMgr;

// Compute shared secret
std::string shared_secret = privateKeyMgr.computeSecret(_KeyBuffer, &keyManager);
```
The compute secret will then call ```Crypto::Asymmetric::OpenSSLInterface::computeSharedSecret```
and then the function will call: ```Crypto::Asymmetric::OpenSSLInterface::_computeSharedSecretECC```
reversed implementation for computing the secret:
```c++
void _computeSharedSecretECC(
    std::string& serverPrivateKey,
    std::string& inPubKey,
    std::string& outPrivKey
) {
    const uint8_t* pPrivKey = (uint8_t*)serverPrivateKey.data();

    EVP_PKEY* pprivKey = d2i_AutoPrivateKey(NULL, &pPrivKey, serverPrivateKey.size());

    if (!pprivKey)
        return;

    const uint8_t* pPubKey = (uint8_t*)inPubKey.data();
    EVP_PKEY* pKeySecret = d2i_PUBKEY(NULL, &pPubKey, inPubKey.size());

    if (!pKeySecret)
        return;

    EVP_PKEY_CTX* pEvpKeyCtx = EVP_PKEY_CTX_new(pprivKey, NULL);
    if (!pEvpKeyCtx)
        return;

    size_t mKeyResultSize = 0ULL;
    if (EVP_PKEY_derive_init(pEvpKeyCtx) > 0
        && EVP_PKEY_derive_set_peer(pEvpKeyCtx, pKeySecret) > 0
        && EVP_PKEY_derive(pEvpKeyCtx, NULL, &mKeyResultSize)) {
        if (!mKeyResultSize)
            return;

        std::string pKeyBuffer(mKeyResultSize, '\0');
        auto pOutKeyPtr = (uint8_t*)pKeyBuffer.data();
        if (EVP_PKEY_derive(pEvpKeyCtx, pOutKeyPtr, &mKeyResultSize) > 0) {
            outPrivKey = pKeyBuffer;
        }
    }

    EVP_PKEY_CTX_free(pEvpKeyCtx);
    EVP_PKEY_free(pKeySecret);
    EVP_PKEY_free(pprivKey);

    return;
}
```

After that, the ```shared_secret``` will be processed:
```c++
std::string hash_seed = key_random + shared_secret;

Crypto::Hash hasher;
std::string encryption_key = hasher.hash(Crypto::Hash::HashType::Sha256, hash_seed);

// Start encryption
mEncryptedNetworkPeer->enableEncryption(encryption_key);

```
