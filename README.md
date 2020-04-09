---
noteId: "f0e8e4407a6d11ea9d13f388630936df"
tags: []

---

# IoT-5G

Telemetry for IoT in 5G


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