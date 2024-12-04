import express from 'express';
import { sample ,createRecord, getRecords, updateRecords, getRecordById, deleteById} from '../controller/userController.js';
const route = express.Router()

route.get('/fetch',sample)
route.post('/create',createRecord)
route.get('/getrecords',getRecords)
route.put('/update',updateRecords)
route.get('/getRecordById',getRecordById)
route.delete('/deleteById',deleteById)

export default route