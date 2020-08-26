"use strict";
const db = use("Database");
class NoteController {
  async index({ request, response }) {
    const notes = await db.table("notes").select("*");
    console.log("index notes: ", notes);
    return notes;
  }
  async show({ request, params }) {
    console.log("notes show params: ", params);
    const note = await db.table("notes").where("id", params.id).select("*");
    console.log("show note: ", note);
    return note;
  }
  async store({ request }) {
    const data = request.all();
    const note = await db.table("notes").insert(data).returning("*");
    console.log("store notes: ", note);
    return note;
  }
  async update({ request, params }) {
    const data = request.all();
    console.log("notes update params: ", params);
    const note = await db
      .table("notes")
      .where("id", params.id)
      .update(data)
      .returning("*");
    console.log("update notes: ", note);
    return note;
  }

  async destroy({ request, params }) {
    console.log("notes delete params: ", params);
    const note = await db.table("notes").where("id", params.id).del();
    console.log("delete notes: ", note);
    return "Note deleted successfully";
  }
}

module.exports = NoteController;
