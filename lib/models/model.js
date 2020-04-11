'use strict';

class Model {
  constructor(schema) {
    this.schema = schema;

  }

  async create() {

  }

  async read(_id) {
    let record = await this.schema.findOne({_id});
    return record;

  }

  async readByQuery(query) {
    let results = await this.schema.find(query);
    return results;

  }



}

module.exports = Model;
