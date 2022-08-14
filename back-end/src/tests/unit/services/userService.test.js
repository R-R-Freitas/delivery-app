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
  
});