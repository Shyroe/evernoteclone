"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateNotesSchema extends Schema {
  up() {
    this.create("notes", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("content");
      table.timestamps();
    });
  }

  down() {
    this.drop("notes");
  }
}

module.exports = CreateNotesSchema;
