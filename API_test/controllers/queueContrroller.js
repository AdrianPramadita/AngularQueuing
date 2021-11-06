// import models
import Queue from "../models/Queue.js";

// function get All Queues
export const getQueues = async (req, res) => {
    try {
        const queues = await Queue.find();
        res.json(queues);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

// function get single Queue
export const getQueueById = async (req, res) => {
    try {
        const queue = await Queue.findById(req.params.id);
        res.json(queue);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

// function Create Queue
export const saveQueue = async (req, res) => {
    const queue = new Queue(req.body);
    try {
        const savedQueue = await queue.save();
        res.status(201).json(savedQueue);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function Update Queue
export const updateQueue = async (req, res) => {
    const cekId = await Queue.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedQueue = await Queue.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedQueue);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function Delete Queue
export const deleteQueue = async (req, res) => {
    const cekId = await Queue.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedQueue = await Queue.deleteOne({_id: req.params.id});
        res.status(200).json(deletedQueue);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}