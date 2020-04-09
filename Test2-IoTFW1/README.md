### Smart device 
- Raspberry pi 3
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

- Dataflow : 
    - smart devices to app 

- MQTT broker : Mosca 
`npm install mosca pino -g  `
`openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem  `
`mosca -c index.js -v | pino  `



- Set up Raspberry Pi ()
    - raspbian OS 
    - boost 
    - `sudo apt update`
    - `sudo apt full-upgrade `
    - `curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -`
    - `sudo apt install nodejs `
    - rasp pi MQTT clients ` npm install mqtt -save  `
        - host : Mosca broker & API engine & RP same network 
    - `mosca -c index.js -v | pino  `
    - `npm install rpi-dht-sensor -save`
    - `npm install rpio -save`

<a href="https://imgur.com/aIpUEqb"><img src="https://i.imgur.com/aIpUEqb.png" title="source: imgur.com" /></a>


- Resource 
    - https://www.raspberrypi.org/downloads/raspbian/
    - https://www.circuitbasics.com/how-to-set-up-the-dht11-humidity-sensor-on-an-arduino/

