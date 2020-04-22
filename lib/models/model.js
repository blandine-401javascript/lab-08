'use strict';

class Model {
  constructor(schema) {
    this.schema = schema;

  }

  async create(record) {
    let newRecord = await this.schema.create(record);
    return newRecord;

  }

  async read(_id) {
    let record = await this.schema.findOne({_id});
    return record;

  }

  async readByQuery(query) {
    let results = await this.schema.find(query);
    return results;

  }

  async update(_id, record){
    let results = await this.schema.findOneAndUpdate({_id}, record);
    return results;
  }

  async delete(_id){
    let results = await this.schema.findOneAndDelete({_id});
    return results;
  }

}

module.exports = Model;
