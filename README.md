<a href="https://www.buymeacoffee.com/hientech" target="_blank"><img src="https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee" alt="Buy Me A Coffee"></a>
  <br>
# IoT-5G

Telemetry for IoT in 5G


### 5G 

<a href="https://imgur.com/bBhyTnS"><img src="https://i.imgur.com/bBhyTnS.jpg" title="source: imgur.com" /></a>


### IoT Protocol 
+ WiFi, Bluetooth, BLE, XBee, LoRaWAN, Ethernet, GSM, LoRaWAN, CoAP
+ MQTT, AMQP
### Edge 
+ Edge gateway 



### Platform 
+ Linux : Ubuntu, Debian, LEDE, OpenWRT 
+ For test : 1 GB of RAM and 20–25 GB of disk Linux 


### Device manager 
+ Embedded device 

### Devices - Raspberry pi 3
- ARM - 1GB SD RAM, USB 2.0 ports, on board network : 10/100 mbits/s ethernet , Bluetooth 4.1, low level peripherals, Power ratings, Power source : 5V via microusb or GPIO header 
- Temperator sensor : LM35 
- Read temperature & humidity with sensor 
- Gateway : Wifi router 

- Connection 
    - RP pin 1-3.3 V - breadboard + railing 
    - pin 6 ground : breadboard railing 
    - RP pin 3 - GPIO 2 - temperature sensor signal pin 
    - rp pin 12  GPIO 18 - LED anode pin 
    - LED cathode pin - breadboard - railing 
    - temp sensor + pin = breadboard + railing 
    - 

# Architecture 
- WSN (Wireless Sensor Networks), IoT cloud computing support, cloud computing, IoT hardware technologies
- IoT sensors types, actuator types, and RFID types
- IoT device platforms, which include Arduino, Raspberry Pi
- Arduino product types, which include Arduino Uno R3, Yun, and Lilypad
- Raspberry Pi and the Raspberry Pi 3 Model B

- Explain the functionality and characteristics of IoT devices, IoT network, and wearable IoT devices
- WPAN (Wireless Personal Area Network) technology and types, which include Bluetooth, ZigBee, and 6LoWPAN
- IEEE 802.15.4 device types
- LPWAN (Low-Power Wide Area Network) technology and types, which include LoRa, UNB (Ultra Narrow Band), Sigfox, and NB-IoT
- LPWAN communication networks, which are designed for long range communications at low power and low bit rates
- advantages of IoT and 5G mobile communication networks
Explain the characteristics of mMTC (massive MTC) based on key requirements, area coverage, frequency, services, connection density, and applications

- WLAN (Wireless Local Area Network) market
- Wi-Fi transmission modes, which include the Infrastructure mode and the Ad-Hoc mode
- Wi-Fi Infrastructure mode and the role of a wireless AP (Access Point), BSS (Basic Service Set), and an ESS (Extended Service Set)
- operation process of Wi-Fi and role of DCF (Distributed Coordination Function) and CSMA/CA (Carrier-Sense Multiple Access with Collision Avoidance)
- Wi-Fi standards, which include the IEEE 802.11a, 11b, 11e, 11g, 11n, 11p, 11ac, 11ad, 11ah specifications
- Wi-Fi PHY (Physical Layer) modulation schemes
- operation process of Wi-Fi operations and IFS (Inter-Frame Space) types and how IFSs are used in priority access control
- advantages of Wi-Fi Dual Band and Wi-Fi Direct


- Bluetooth piconet and types of operation, which include Classic Bluetooth and BLE (Bluetooth Low Energy)
- advantages of BLE (Bluetooth Low Energy) and the channel specifications and advertising and connection events
- Bluetooth evolution (i.e., specifications 1.1 to 5) including EDR (Enhanced Data Rate), HS (High Speed), BLE (Bluetooth Low Energy), and Beacon technology

- MCC (Mobile Cloud Computing) and Edge Computing, which include Fog computing, MEC (Mobile Edge Computing), and Cloudlet technology


- - advantages of Bluetooth technology through project experimentation
- operation process of Bluetooth in Android and iPhone smartphones
- Scan a Bluetooth packet and identify different Bluetooth versions being used on a smartphone
- Wi-Fi technology through project experimentation
- operation process of Wi-Fi in Android and iPhone smartphones
- Recognize how to use a Wi-Fi network analyzer, LAN scan, send ping to a gateway, Wi-Fi signal scan, and use a Wi-Fi channel graph
- operation process of the AWS (Amazon Web Service) EC2 (Elastic Compute Cloud) system



### Hardware
- Extracting firmware from the real-world IoT device.
- Performing live debugging to bypass security protections and restrictions

- Writing new firmware to the device
- extend device functions






#### Test case 1 
+ time series DB 
+ message broker
+ Security : 
  + establish firewall, SSL 
  + audit logs 
  + add program : fail2ban, mod-security 
+ Rule engine logic 
  + Node RED flow based approach 
  + Flow sequence 
  
+ Production deployment pipeline : could test with digital ocean with many options for IoT platform 
  
+ IoT platform API: 




#### IoT.js Base Architecture
<a href="https://imgur.com/rlY8bZn"><img src="https://i.imgur.com/rlY8bZn.png" title="source: imgur.com" /></a>
broker -> Mosca certificates and config
pi-base -> Starting point of code running on Raspberry Pi 3
pi -> Final code running on Raspberry Pi 3
start.sh -> Script to start Broker, API Engine & Web app as deamos
<a href="https://imgur.com/x3eprZM"><img src="https://i.imgur.com/x3eprZM.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/GpwTa8q"><img src="https://i.imgur.com/GpwTa8q.png" title="source: imgur.com" /></a>



### Resource 
- https://xmpp.org/about/
- https://azure.microsoft.com/en-us/
- https://pi4j.com/1.2/pins/model-3b-rev1.html
- https://www.hardkernel.com/
- https://beagleboard.org/
- https://www.raspberrypi.org/
- https://www.salesforce.com/uk/products/field-service/overview/
- https://cloud.google.com/
- https://www.ibm.com/watson
- http://coap.technology/
- https://iot.eclipse.org/projects/
- https://www.oracle.com/internet-of-things/
- https://aws.amazon.com/
- https://www.hivemq.com/blog/how-to-get-started-with-mqtt/
- http://mqtt.org/
- https://thingtrax.com/2017/10/05/industry-4-0-increases-machine-efficiency/
- https://uk.farnell.com/internet-of-things



### TODO 
- Raspberry PI connect 
    - https://www.raspberrypi.org/
- 
