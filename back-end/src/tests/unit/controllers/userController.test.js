const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../../api/app');
const user = require('../../../database/models/user');

chai.use(chaiHttp);
const { expect } = chai;

const userMocks = require('../../mocks/user');

describe('Testa se é possível logar com usuário e senha corretos', () => {

  let chaiHttpResponse;

  before(async () => {
    sinon
      .stub(user, 'findOne')
      .resolves({
        ...userMocks.customerId,
        ...userMocks.customerWithoutPasswordAndId,
        ...userMocks.customerPassword,
      });
  });

  after(()=> {
    user.findOne.restore()
  });

  it('Verifica se a chamada retorna o código de status 200 e um token', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(correctLoginBody);

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.have.property('token');
    expect(chaiHttpResponse.body.token).to.be.a('string');
  });

});

describe('Testa que não é possível logar sem email ou senha', () => {

  let chaiHttpResponse;
  const missingKeyError = 'All fields must be filled';
  const missingEmailBody = { password: 'password' };
  const missingPasswordBody = { email: 'user@user.com' }

  before(async () => {
    sinon
      .stub(user, 'findOne')
      .resolves(foundUser);
  });

  after(()=>{
    (user.findOne).restore();
  });

  it('Verifica se a chamada sem o email retorna o código de status 400 e uma message', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(missingEmailBody);

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.have.property('message');
    expect(chaiHttpResponse.body.message).to.be.equal(missingKeyError);
  });

  it('Verifica se a chamada sem o password retorna o código de status 400 e uma message', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(missingPasswordBody);

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.have.property('message');
    expect(chaiHttpResponse.body.message).to.be.equal(missingKeyError);
  });

});

describe('Testa que não é possível logar email ou senha incorretos', () => {

  let chaiHttpResponse;
  const invalidDataError = 'Incorrect email or password';
  const wrongEmailBody = { email: 'invalid@user.com', password: 'secret_user' };
  const wrongPasswordBody = { email: 'user@user.com', password: 'wrong_password' }

  before(async () => {
    sinon
      .stub(user, 'findOne')
      .resolves(foundUser);
  });

  after(()=>{
    (user.findOne).restore();
  });

  it('Verifica se a chamada com email incorreto retorna o código de status 401 e uma message', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(wrongEmailBody);

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.have.property('message');
    expect(chaiHttpResponse.body.message).to.be.equal(invalidDataError);
  });

  it('Verifica se a chamada com password incorreto retorna o código de status 401 e uma message', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(wrongPasswordBody);

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.have.property('message');
    expect(chaiHttpResponse.body.message).to.be.equal(invalidDataError);
  });

});

describe('Testa se a rota /login/validate retorna a role do usuário logado', () => {

  let chaiHttpResponse;

  before(async () => {
    sinon
      .stub(user, 'findOne')
      .resolves(foundUser);
  });

  after(()=>{
    (user.findOne).restore();
  });

  it('Verifica se a chamada retorna o código de status 200 e a role do user', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send(correctLoginBody);

    const token = chaiHttpResponse.body.token;

    chaiHttpResponse = await chai
      .request(app).get('/login/validate').set({ 'authorization': token });

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.have.property('role');
    expect(chaiHttpResponse.body.role).to.be.equal(foundUser.role);
  });

}); 