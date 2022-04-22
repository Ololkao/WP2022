#!/usr/bin/env node

import express from 'express'
// const express = require('express')

import fs from 'fs'
// const fs = require('fs')
// import XMLHttpRequest from 'xhr2'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// create an express, aka web server, instance
const app = express()

const port = 30678

// start the server
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

// handle other urls
app.use(express.static(`${__dirname}/public`))

app.get('/create', (req, res) => {
    fs.readFile('public/students.json', 'utf8', (err, data) => {
        if (err) throw (err)
        const obj = JSON.parse(data)
        // let text = "";
        // for (const x in obj) {
        //     text += (x + ":" + obj[x] + "<br>");
        // }
        let text = JSON.stringify(obj, null, 0)
        text = text.replace(/,/g, "<br>").slice(1, -1)
        res.send(`${text}`)
    })

    // const xhr = new XMLHttpRequest()
    // xhr.onreadystatechange = function() {
    //     if (xhr.status == 200) {
    //         console.log(xhr)
    //         // res.send(this.responseText)
    //         document.writeln(xhr.responseText)
    //     }
    // }
    // xhr.open('GET', "public/students.json")
    // xhr.send()
})

app.get('/read', (req, res) => {
    fs.readFile('public/students.json', 'utf8', (err, data) => {
        if (err) throw (err)
        const obj = JSON.parse(data)
        const name = obj[req.query.value]
        let text = `<h1>Hello, ${name}<h1>`
        res.send(`${text}`)
    })
})

app.get('/update', (req, res) => {
    const path = 'public/students.json'
    const uName = req.query.value1
    const uID = req.query.value2
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw (err)
        const obj = JSON.parse(data)
        obj[uName] = uID
        fs.writeFile(path, JSON.stringify(obj, null, 2), err => {
            if (err) {
                console.log(err)
                return
            }
        })
    })
})

app.get('/delete', (req, res) => {
    const path = 'public/students.json'
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw (err)
        const obj = JSON.parse(data)
        const name = req.query.value
        delete obj[name]
        fs.writeFile(path, JSON.stringify(obj, null, 2), err => {
            if (err) {
                console.log(err)
                return
            }
        })
    })
})
