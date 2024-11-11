---
prev:
    text: 'Learning MCBE Protocol'
next:
    text: 'Learning Data Types'
    link: '/raknet/data-types'
---

# RakNet Protocol

Latest documentation on the RakNet protocol mainly for Minecraft Bedrock Edition(s). Explains packets, their data types, and their formatation.

## What is RakNet?

RakNet is a UDP transfer layer. It is mainly used in Minecraft Bedrock, but is used and can be used in other games. This document will cover RakNet as a whole, but the main focus is on the MCBE implementation.

## How does RakNet work?

As mentioned before, RakNet protocol uses UDP. This means that the [Packets]() that are sent, might not always make it. This doesn't matter for things like [Pings]() and [Pongs](), but when dealing with more important information, we want to make sure the clients(players) get that data. To combat this, RakNet uses [Frame Set]() packets. These split data up if its too big and also keep track of what data didn't make it to the client and in that case resend it. This uses [ACK]() & [NACK]() packets which the recipient of a [Frame Set]() packet sends back to either say it got this part of the data or is missing this part of the data.

## Handshake sequence

This is what happens for every client wanting to connect.

---

* Clients Pings the server, and the Server sends back a Pong
* A client would then send an [Open Connection Request 1]()
* Server responds by sending an [Open Connection Reply 1]()
* Client sends an [Open Connection Request 2]()
* Server replys with an [Open Connection Reply 2]()

> [!NOTE]
> From here, the connection is made and we start sending packets in [Frame Sets]()

* Clients sends a [Connected Ping](), and the Server replies with a [Connected Pong]()
* Client sends a [Connection Request]()
* Server responds with a [Connection Request Accepted]()
* Lastly, Client sends a [New Incoming Connection]()

> [!NOTE]
> From here, both Clients and Server regularly send [Connected Ping](Connected Pings) and reply with [Connected Pong](Connected Pongs). (If stopped, we have lost connection)
---

Now, all data recieved from frame sets are [Game Packet](Game Packets). The data recieved from the game packet is now delt with by the [Bedrock Protocol]() (We will go over it after RakNet).

This is the barebones of RakNet, so do not worry if you do not understand yet. Our next part is going to go over the [Data Types]() used by RakNet.

---

#### Resources

[[Jenkin Software RakNet Docs](http://www.jenkinssoftware.com/raknet/manual/systemoverview.html)]: Information on how RakNet works & communicates

[[wiki.vg](https://wiki.vg/Raknet_Protocol)]: Information on handshake sequence
