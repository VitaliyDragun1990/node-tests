const expect = require('expect');
// import library for mocking modules dependencies using spy etc.
const rewire = require('rewire');
// import app module using rewire library
const app = rewire('./app');

describe('App', () => {
    // create a mock object with a spy to use in the app module
    const db = {
        saveUser: expect.createSpy()
    };
    // inject our mock with spy into the app module
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call saveUser with user object', () => {
        let email = 'jack@gmail.com';
        let password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalled();
    });
});