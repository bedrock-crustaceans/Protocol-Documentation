---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Bedrock'
  text: 'Protocol Wiki'
  tagline: "The entirety of MInecraft Bedrock's Protocol! All documented in one place!"
  actions:
    - theme: brand
      text: Start here!
      link: /info/learn
    - theme: alt
      text: Contribute
      link: /info/contributing
    - theme: alt
      text: GitHub
      link: https://github.com/bedrock-crustaceans/protocol-wiki

features:
  - title: Bedrock Protocol
    icon: ⚙️
    # Un-sure on the best way to word this/explain it.
    details: The Bedrock Protocol is the Minecraft's protocol, the packets and data sent to and from clients.
    link: /bedrock/start
  - title: RakNet Protocol
    icon: 🛠️
    details: RakNet Protocol is the transport layer used for pinging and connecting to servers.
    link: /raknet/start
  - title: NetherNet Protocol
    icon: 🌍
    details: NetherNet Protocol is a new transport layer, mainly used for Xbox Live sessions right now.
    link: /nethernet/start
---