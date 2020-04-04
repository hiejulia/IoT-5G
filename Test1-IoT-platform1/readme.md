### Server (Cloud)
+ Ubuntu 2 GB of RAM, 50 GB of disk
+ Data center region 

<a href="https://imgur.com/IwvQU1n"><img src="https://i.imgur.com/IwvQU1n.png" title="source: imgur.com" /></a>

### Security 
+ firewall enabled 
`ufw app list`
`ufw allow OpenSSH` (ssh allowed)
`ufw enable`
+ SSL 
+ Dependencies : nodejs, npm , 
`npm install -g --unsafe-perm node-red`

+ `http://<INSTANCE_IP>:1880`
+ node-red 
+ ` npm install -g node-red-admin`
+ Log file : `node-red.log`


### Message broker 
+ MQTT : Mosquitt 
    + mosquitto mosquitto-clients
    + `lsof -i :1883`
    + mosquitto_pub -h localhost -t testTopic -m "Hello world "
    + mosquitto_sub -h localhost -t testTopic
    + `nano /etc/mosquitto/conf.d/broker.conf`
+ ACL setup 

+ Web socket 
### Time series DB 
+ InfluxDB


### Add websocket to MQTT config
+ test MQTT websocket with Eclopse Paho : https://www.eclipse.org/paho/clients/js/utility/ `paho-mqtt.js`

### Links 
+ `http://localhost:8888/sources/10000/admin-influxdb/databases`


<a href="https://imgur.com/1Jg4H65"><img src="https://i.imgur.com/1Jg4H65.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/92SXnsQ"><img src="https://i.imgur.com/92SXnsQ.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/aUlClow"><img src="https://i.imgur.com/aUlClow.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/kybwIgQ"><img src="https://i.imgur.com/kybwIgQ.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/Z4DW4nU"><img src="https://i.imgur.com/Z4DW4nU.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/pfGfcAM"><img src="https://i.imgur.com/pfGfcAM.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/WXkrJoX"><img src="https://i.imgur.com/WXkrJoX.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/LUDebqG"><img src="https://i.imgur.com/LUDebqG.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/QMHYp7t"><img src="https://i.imgur.com/QMHYp7t.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/RRJQOhr"><img src="https://i.imgur.com/RRJQOhr.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/kDgtq4p"><img src="https://i.imgur.com/kDgtq4p.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/bGM9qW6"><img src="https://i.imgur.com/bGM9qW6.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/HHaLakM"><img src="https://i.imgur.com/HHaLakM.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/BuKglEj"><img src="https://i.imgur.com/BuKglEj.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/PhGDv5g"><img src="https://i.imgur.com/PhGDv5g.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/gNAIU9h"><img src="https://i.imgur.com/gNAIU9h.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/tG7wzyY"><img src="https://i.imgur.com/tG7wzyY.png" title="source: imgur.com" /></a>


### Resources
+ https://gist.github.com/KazChe/6bcafbaf29e10a7f309d3ca2e2a0f706 
+ https://wiki.opnfv.org/display/fastpath/Installing+and+configuring+InfluxDB+and+Grafana+to+display+metrics+with+collectd
+ https://github.com/influxdata/sandbox.git 
+ https://nodered.org/docs/user-guide/editor/ 
+ https://v2.docs.influxdata.com/v2.0/
+ https://www.influxdata.com/university/
+ https://www.influxdata.com/products/integrations/
+ https://github.com/influxdata/sandbox
+ https://github.com/influxdata/docs.influxdata.com/blob/master/content/flux/v0.7/introduction/getting-started/query-influxdb.md 


 
