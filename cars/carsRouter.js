const express = require('express')

const router = express.Router()

const db = require('../data/connections')

router.get('/', (req, res) => {
    db('cars').then(cars => {
        res.status(200).json({ data: cars })
    })
})

router.post('/', (req, res) => {
    db('cars')
        .insert(req.body, "id")
        .then(id => {
            res.status(201).json({ id: id })
        })
        .catch(error => {
            res.status(500).json({ message: 'there was a problem adding entry' })
        })
})

router.put('/:id', (req, res) => {
    const id = Number(req.params.id)
    db('cars')
        .where({ id: id })
        .update(req.body)
        .then(resp => {
            if (resp) {
                res.status(201).json({ message: 'successfully updated entry' })
            } else {
                res.status(404).json({ message: 'entry by that id not found' })
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    db('cars')
        .where({ id })
        .del()
        .then(resp => {
            if (resp) {
                res.status(201).json({ message: 'successfully deleted entry' })
            } else {
                res.status(404).json({ message: 'entry by that ID not found' })
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

module.exports = router