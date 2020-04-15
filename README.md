# IoT-5G

Telemetry for IoT in 5G


### 5G 
We will see how 5G being cool now 
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
- Explain the functionality and characteristics of the IoT architecture layers
Explain the characteristics of IoT technologies, which include WSN (Wireless Sensor Networks), IoT cloud computing support, cloud computing, IoT R&D (Research & Development), IoT hardware technologies
Explain the characteristics of IoT sensors types, actuator types, and RFID types
Explain the functionality and characteristics of IoT device platforms, which include Arduino, Raspberry Pi, and BeagleBoard products
Explain the features of Arduino product types, which include Arduino Uno R3, Yun, and Lilypad
Explain the features of the Raspberry Pi and the Raspberry Pi 3 Model B
Explain the features of the BeagleBoard and Beaglebone Black


- Explain the functionality and characteristics of IoT devices, IoT network, and wearable IoT devices
Explain the characteristics and requirements of ISM (Industrial, Scientific and Medical) bands
Explain the functionality and characteristics of the IoT wireless network architecture
Explain the functionality and characteristics of WLAN (Wireless Local Area Network) technology and types
Explain the functionality and characteristics of WPAN (Wireless Personal Area Network) technology and types, which include Bluetooth, ZigBee, and 6LoWPAN
Explain the functionality and characteristics of IEEE 802.15.4 device types
Explain the functionality and characteristics of LPWAN (Low-Power Wide Area Network) technology and types, which include LoRa, UNB (Ultra Narrow Band), Sigfox, and NB-IoT
Explain the features of LPWAN communication networks, which are designed for long range communications at low power and low bit rates
Recognize the advantages of IoT and 5G mobile communication networks
Explain the characteristics of mMTC (massive MTC) based on key requirements, area coverage, frequency, services, connection density, and applications

- 
Explain the characteristics and types of Wi-Fi technology
Explain the characteristics of the WLAN (Wireless Local Area Network) market
Explain the functionality and characteristics of Wi-Fi transmission modes, which include the Infrastructure mode and the Ad-Hoc mode
Explain the functionality and characteristics of Wi-Fi Infrastructure mode and the role of a wireless AP (Access Point), BSS (Basic Service Set), and an ESS (Extended Service Set)
Recognize the operation process of Wi-Fi and role of DCF (Distributed Coordination Function) and CSMA/CA (Carrier-Sense Multiple Access with Collision Avoidance)
Explain the characteristics of Wi-Fi standards, which include the IEEE 802.11a, 11b, 11e, 11g, 11n, 11p, 11ac, 11ad, 11ah specifications
Explain the characteristics of Wi-Fi PHY (Physical Layer) modulation schemes
Recognize the operation process of Wi-Fi operations and IFS (Inter-Frame Space) types and how IFSs are used in priority access control
Recognize the advantages of Wi-Fi Dual Band and Wi-Fi Direct
Explain the functionality and characteristics of Bluetooth technology and types
Discover the differences in Bluetooth standards and feature evolution
Explain the characteristics of Bluetooth piconet and types of operation, which include Classic Bluetooth and BLE (Bluetooth Low Energy)
Recognize the advantages of BLE (Bluetooth Low Energy) and the channel specifications and advertising and connection events
Explain the characteristics of the Bluetooth evolution (i.e., specifications 1.1 to 5) including EDR (Enhanced Data Rate), HS (High Speed), BLE (Bluetooth Low Energy), and Beacon technology

- Discover the relation between IoT and mobile cloud technology
Discover the differences in MCC (Mobile Cloud Computing) and Edge Computing, which include Fog computing, MEC (Mobile Edge Computing), and Cloudlet technology


- Recognize the advantages of Bluetooth technology through project experimentation
Recognize the operation process of Bluetooth in Android and iPhone smartphones
Recognize how to scan a Bluetooth packet and identify different Bluetooth versions being used on a smartphone
Recognize the advantages of Wi-Fi technology through project experimentation
Recognize the operation process of Wi-Fi in Android and iPhone smartphones
Recognize how to use a Wi-Fi network analyzer, LAN scan, send ping to a gateway, Wi-Fi signal scan, and use a Wi-Fi channel graph
Recognize the advantages of Cloud technology through project experimentation
Recognize the operation process of the AWS (Amazon Web Service) EC2 (Elastic Compute Cloud) system
Recognize how to setup an EC2 Virtual Computer in AWS
Recognize how to use various options and compute a process on EC2 and use S3



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