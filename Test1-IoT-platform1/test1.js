msg.topic = "SELECT id,topic,payload,timestamp" +
            " FROM thingData WHERE" +
            " topic LIKE '" + msg.req.params.topic.replace(/\*/g, "%") + "'" +
            " AND" +
            " payload LIKE '" + msg.req.params.payload.replace(/\*/g, "%") + "'" +
            " AND deleted=0" +
            " AND (" + msg.req.authFilter + ")" +
            " ORDER BY ID DESC" +
            " LIMIT " + msg.req.params.count + ";";



msg.topic = "SELECT id,topic,payload,timestamp" +
            " FROM thingData WHERE" +
            " topic LIKE '" + msg.req.params.topic.replace(/\*/g, "%") + "'" +
            " AND" +
            " timestamp >= '" + msg.req.params.time +  "'" +
            " AND deleted=0" +
            " AND (" + msg.req.authFilter + ")" +
            " ORDER BY ID DESC" +
            " LIMIT " + msg.req.params.count + ";";




msg.topic = "SELECT id,topic,payload,timestamp" +
            " FROM thingData WHERE" +
            " topic LIKE '" + msg.req.params.topic.replace(/\*/g, "%") + "'" +
            " AND" +
            " timestamp <= '" + msg.req.params.time + "'" +
            " AND deleted=0" +
            " AND (" + msg.req.authFilter + ")" +
            " ORDER BY ID DESC" +
            " LIMIT " + msg.req.params.count + ";";


msg.topic = "SELECT id,topic,payload,timestamp" +
            " FROM thingData WHERE" +
            " topic LIKE '" + msg.req.params.topic.replace(/\*/g, "%") + "'" +
            " AND" +
            " timestamp >= '" + msg.req.params.start + "'" +
            " AND" +
            " timestamp <='" + msg.req.params.end +  "'" +
            " AND deleted=0" +
            " AND (" + msg.req.authFilter + ")" +
            " ORDER BY ID DESC" +
            " LIMIT " + msg.req.params.count + ";";