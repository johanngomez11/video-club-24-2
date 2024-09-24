const express = require('express');

// Modelo RESTFULL
function create(req, res, next) {
    res.send(`POST => /users/ => ${req.body.name}`);
}

function list(req, res, next) {
    res.send('GET => /users/');
}

function index(req, res, next) {
    res.send(`GET => /users/${req.params.id}`); //Cambiar en body a form-urlencoded en postman
}

function replace(req, res, next) {
    res.send('PUT => /users/:id');
}

function update(req, res, next) {
    res.send('PATCH => /users/:id');
}

function destroy(req, res, next) {
    res.send('DELETE=> /users/:id');
}

module.exports = {create, list, index, replace, update, destroy};