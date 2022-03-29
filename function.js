const path = require('path');

class App {
    data = require('./lib/dataCompiler');
    constructor(version) {
        this.AppID = "770384411610316802";
        this.dataPath = path.join(process.env.APPDATA + "../../Local/Growtopia/");
        this.version = version;
        this.processTitle = "Growtopia-RPC by Phemus - " + this.version;
    }
}