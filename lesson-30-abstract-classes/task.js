"use strict";
class Logger {
    printDate(date) {
        console.log(String(date));
    }
}
class RealLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
new RealLogger().logWithDate('hello');
