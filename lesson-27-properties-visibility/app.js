"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _User_prop;
class User {
    constructor() {
        this.password = 'ffff';
        _User_prop.set(this, void 0);
    }
    // !
    set email(newEmail) {
        this._email = newEmail;
    }
    get email() {
        return this._email;
    }
    changePassword(newPass) {
        this.password = newPass;
        __classPrivateFieldSet(this, _User_prop, newPass, "f");
    }
}
_User_prop = new WeakMap();
console.log(new User().changePassword('444'));
class VerifiedUser extends User {
    setFavNumbers(n) {
        this.favorite_numbers.push(n);
    }
}
