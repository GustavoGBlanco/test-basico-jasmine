function Entity() {
};
Entity.prototype.setName = function (name) {
  this.name = name;
};
Entity.prototype.getName = function () {
  return this.name;
}
Entity.prototype.setCode = function (code) {
  this.code = code;
};
Entity.prototype.getCode = function () {
  return this.code;
}
Entity.prototype.getStatus = function () {
  return this.status;
};
Entity.prototype.setStatus = function (status) {
  this.status = status;
}
Entity.prototype.setPhoneNumber = function (phoneNumber) {
  this.phoneNumber = phoneNumber;
}
Entity.prototype.setAddress = function (address) {
  this.address = address;
}
Entity.prototype.getAddress = function () {
  return this.address;
}
Entity.prototype.mockService = function () {
  return new Promise(resolve => {
    return setTimeout(() => {
        resolve ({
          response: "ejemplo"
        })
      },
      5000
    );
  })
}

describe('Entity', function () {
  var entity;
  beforeAll(function () {
    entity = new Entity();
  });

  it('spy', function () {
    spyOn(entity, 'setName');
    entity.setName("Gustavo Garcia");
    expect(entity.setName).toHaveBeenCalled();
    expect(entity.setName).toHaveBeenCalledTimes(2);
    expect(entity.setName).toHaveBeenCalledWith("Gustavo Garcia");
  });

  it('createSpy', function () {
    whatAmI = jasmine.createSpy('whatAmI');
    whatAmI("I", "am", "a", "spy");
    expect(whatAmI).toHaveBeenCalled();
  });
});

xdescribe('Entity', function () {
  var entity;
  beforeEach(function () {
    entity = new Entity();
    spyOn(entity, 'getName').and.returnValue("Gaston Falanga");
  });
  it('spy mock', function () {
    expect(entity.getName()).toEqual("Gaston");
  });
});

xdescribe('Entity', function () {
  var entity;
  beforeEach(function () {
    entity = new Entity();
  });
  it('callFake', function () {
    var fakeGetName = function(name) {
      return name + " Genero: Masculino";
    }
    spyOn(entity, 'getName').and.callFake(fakeGetName);
    expect(entity.getName("GUSTAVO ADOLFO GARCIA BLANCO")).toEqual("GUSTAVO ADOLFO GARCIA BLANCO Genero: Masculino");
  });
});

describe('Entity', function () {
  var entity;
  beforeEach(function () {
    entity = new Entity();
  });
  it('callFake', function () {
    async function asyncCall() {
      const result = await entity.mockService();
      expect(result).toEqual({
        response: "ejemplo"
      });
    }

    asyncCall();
  });
});