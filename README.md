# RTC

A **signaling protocol** for WebRTC applications.

## TURN

**[Traversal Using Relays around NAT][0]**, is a `protocol` that assists in traversal of **network address translators** or firewalls for multimedia applications. It may be used with the **Transmission Control Protocol** and **User Datagram Protocol**. It is most useful for clients on networks masqueraded by [**symmetric NAT**][1] devices. TURN does not aid in running servers on well known ports in the private network through a NAT; it supports the connection of a user behind a NAT to only a single peer, as in telephony, for example.

TURN is specified by [RFC 5766][2]. An update to TURN for IPv6 is specified in [RFC 6156][3]. The TURN URI scheme is documented in [RFC 7065][4].


### Free Turn servers

+ [webRTC stun / turn server list][5]
+ [STURN + TURN servers list][6]

## WebRTC

**Web Real-Time Communication** is a free, open-source project that provides web browsers and mobile applications with **real-time communication** via simple **application programming interfaces**. It allows audio and video communication to work inside web pages by allowing direct peer-to-peer communication, eliminating the need to install plugins or download native apps. Supported by Apple, Google, Microsoft, Mozilla, and Opera, WebRTC is being standardized through the **World Wide Web Consortium** and the **Internet Engineering Task Force**.

### Examples using socket.io

+ [webrtc-group-chat-example][7]


[0]: https://en.wikipedia.org/wiki/Traversal_Using_Relays_around_NAT
[1]: https://en.wikipedia.org/wiki/Network_address_translation#Symmetric_NAT
[2]: https://tools.ietf.org/html/rfc5766
[3]: https://tools.ietf.org/html/rfc6156
[4]: https://tools.ietf.org/html/rfc7065
[5]: https://gist.github.com/sagivo/3a4b2f2c7ac6e1b5267c2f1f59ac6c6b
[6]: https://gist.github.com/yetithefoot/7592580
[7]: https://github.com/anoek/webrtc-group-chat-example
