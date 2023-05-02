/* console.clear();

console.log("EYYYYYY");

import {createServer} from 'http';

const httpServer = createServer((req, res) => {
    console.log("PETICION RECIBIDA");

    res.end("RECIBIDO COLEGA")
});

httpServer.listen(3000);
 */

console.clear();

import {createServer} from 'http';

const httpServer = createServer((req, res) => {
    console.log(req.method);

    console.log(req.url);

    console.log(req.headers);

    

    res.end("RECIBIDO COLEGA")
});