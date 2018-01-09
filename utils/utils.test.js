const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            let res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        }) ;
    });

    it('should square a number', () => {
        let res = utils.square(5);
        expect(res).toBeA('number').toBe(25);
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBeA('number').toBe(25);
            done();
        });
    });

    it('should verify first and last names are set', () => {
        let user = {
            age: 25,
            location: 'Ukraine'
        };

        let result = utils.setName(user, 'Vitaly Dragun');

        expect(result).toBeA('object').toInclude({
            firstName: 'Vitaly',
            lastName: 'Dragun'
        });

    });

    xit('should expect some values', () => {
        // expect(12).toNotBe(11);
        //  expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
        //  expect([2,3,4]).toExclude(1);
        expect({
            name: 'Andrew',
            age: 25,
            location: 'Philadelphia'
        }).toInclude({
            age: 25
        });
    });
});
