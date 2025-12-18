import isStrongPassword from './index.js';

QUnit.test('Test short password', function(assert) {

   assert.ok(typeof isStrongPassword === 'function', 'isStrongPassword() is defined');

   const passwords = {
      'Abc123' : false,
      'Abc1234': false,
      'Abc12345': true
   };

   for (let password in passwords) {
      const returnVal = isStrongPassword(password);
      assert.equal(typeof(returnVal), 'boolean', 'isStrongPassword() returns a Boolean value');
      assert.equal(returnVal, passwords[password],
        `Returns ${passwords[password]} for password ${password}`);
   }
});


QUnit.test('Test password containing "password"', function(assert) {

   assert.ok(typeof isStrongPassword === 'function', 'isStrongPassword() is defined');

   const passwords = {
      'Abcpassword123' : false,
      'Abc123password': false,
      'passwordAbc123': false,
      'passworAbc12345': true
   };

   for (let password in passwords) {
      const returnVal = isStrongPassword(password);
      assert.equal(typeof(returnVal), 'boolean', 'isStrongPassword() returns a Boolean value');
      assert.equal(returnVal, passwords[password],
         `Returns ${passwords[password]} for password ${password}`);
   }

});

QUnit.test('Test check for uppercase character', function(assert) {

   assert.ok(typeof isStrongPassword === 'function', 'isStrongPassword() is defined');

   const passwords = {
      'abc1235ppp' : false,
      'abc1235Upp': true,
      'abc12U35pp': true,
      'Uabc1235pp': true
   };

   for (let password in passwords) {
      const returnVal = isStrongPassword(password);
      assert.equal(typeof(returnVal), 'boolean', 'isStrongPassword() returns a Boolean value');
      assert.equal(returnVal, passwords[password],
        `Returns ${passwords[password]} for password ${password}`);
   }
});