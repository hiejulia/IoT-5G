#!/bin/sh

# Start broker in the background and keep it run forever 
# Log :  mqtt.log 

chmod +x mqtt-sh.sh
pkill mosquitto
forever start -l mqtt.log --append -c -sh /root/mqtt-sh.sh