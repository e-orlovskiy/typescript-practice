"use strict";
class UserService {
    static getUser(id) {
        console.log(1);
    }
    log() {
        console.log(2);
        UserService.getUser(0);
    }
}
(() => {
    UserService.userList = [4, 4, 4];
})();
UserService.getUser(1);
const test = new UserService();
test.log();
