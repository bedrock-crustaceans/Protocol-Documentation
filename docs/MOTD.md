# Obtaining the MOTD

## Sending unconnected ping

Using basic raknet, we can send an unconnected ping to the server using only the ip and port.<br>
It has the following format:<br>
&nbsp;&nbsp;&nbsp;&nbsp;packet id: 0x01 (byte)<br>
&nbsp;&nbsp;&nbsp;&nbsp;time: 8 bytes (uint64)<br>
&nbsp;&nbsp;&nbsp;&nbsp;magic OfflineMessageID: 0x00, 0xFF, 0xFF, 0x00, 0xFE, 0xFE, 0xFE, 0xFE, 0xFD, 0xFD, 0xFD, 0xFD, 0x12, 0x34, 0x56, 0x78 (16 bytes)<br>
&nbsp;&nbsp;&nbsp;&nbsp;guid: 8 bytes (uint64)<br>

## Unconnected pong as response

The server should respond with an unconnected pong with the following format:<br>
&nbsp;&nbsp;&nbsp;&nbsp;packet id: 0x1C (byte)<br>
&nbsp;&nbsp;&nbsp;&nbsp;time: 8 bytes (uint64)<br>
&nbsp;&nbsp;&nbsp;&nbsp;server guid: 8 bytes (uint64)<br>
&nbsp;&nbsp;&nbsp;&nbsp;MOTD length: 2 bytes (uint16)<br>
&nbsp;&nbsp;&nbsp;&nbsp;MOTD: string<br>

The MOTD is a semicolon separated list of values, these semicolons can be escaped with a backslash:<br>
&nbsp;&nbsp;&nbsp;&nbsp;header: string (Seems to always be MCPE, also called edition so maybe it can be different)<br>
&nbsp;&nbsp;&nbsp;&nbsp;motd: string (The actual message that is displayed, it can have minecraft colors)<br>
&nbsp;&nbsp;&nbsp;&nbsp;protocol: uint16 (The protocol version used by the server e.g. 748)<br>
&nbsp;&nbsp;&nbsp;&nbsp;version: string (The version of the server e.g. 1.20.40, or on cubecraft: 1)<br>
&nbsp;&nbsp;&nbsp;&nbsp;players online: uint32 (The number of players currently on the server)<br>
&nbsp;&nbsp;&nbsp;&nbsp;players max: uint32 (The maximum number of players that can be on the server)<br>
&nbsp;&nbsp;&nbsp;&nbsp;server id: uint64 (The server guid but as a number)<br>
&nbsp;&nbsp;&nbsp;&nbsp;level name: string (The name of the current world on bds, e.g. "world", some docs call this submotd)<br>
&nbsp;&nbsp;&nbsp;&nbsp;gamemode: string (The gamemode of the server, e.g. "Survival" | "Creative" | "Adventure")<br>
&nbsp;&nbsp;&nbsp;&nbsp;NintendoLimited: boolean (Returns the status of Nintendo's limitation to join)<br>
&nbsp;&nbsp;&nbsp;&nbsp;port v4: uint16 (The port of the server for ipv4, useful for servers that have both ipv4 and ipv6)<br>
&nbsp;&nbsp;&nbsp;&nbsp;port v6: uint16 (The port of the server for ipv6, useful for servers that have both ipv4 and ipv6)<br>

## Sources
[Go Raknet](https://github.com/Sandertv/go-raknet/blob/master/internal/message/unconnected_ping.go#L8)<br>
[PHP MC Query](https://github.com/xPaw/PHP-Minecraft-Query/blob/master/src/MinecraftQuery.php#L212)<br>
[Raknet]( https://github.com/facebookarchive/RakNet/blob/1a169895a900c9fc4841c556e16514182b75faf8/Source/RakPeer.cpp#L135)<br>
[Phantom](https://github.com/jhead/phantom/blob/44056d83afbfe60b253faff01308d171ac21e8d6/internal/proto/proto.go#L23)<br>
[Geyser](https://github.com/GeyserMC/Protocol/blob/46b4ad37b159b1fc59e45871f7572101f5ed43ab/bedrock-connection/src/main/java/org/cloudburstmc/protocol/bedrock/BedrockPong.java#L23)<br>
Wireshark 
