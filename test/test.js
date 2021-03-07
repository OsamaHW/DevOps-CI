//const {assert} = requrie('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
chai.should();
chai.use(chaiHttp);

describe("hello world testing",()=>{
    it("should return hello world",function(){
        chai.assert.equal("hello world", "hello world1");
    });
})

describe("User controller testing",()=>{
    it("should return all users",(done)=>{
        chai.request(server).get('/users').end((error,res)=>{
            debugger;
            res.should.have.status(200);
            done();
        });
    });
});