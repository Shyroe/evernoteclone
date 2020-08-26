"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/notes", "NoteController.index");
Route.get("/notes/:id", "NoteController.show");
Route.post("/notes", "NoteController.store");
Route.put("/notes/:id", "NoteController.update");
Route.delete("/notes/:id", "NoteController.destroy");
