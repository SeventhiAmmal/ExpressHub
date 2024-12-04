import User from "../model/userModel.js"

export const createRecord = async (req,res) => {
    try{

    const data = new User(req.body)
    console.log("data",data)
    const {email} = data.userEmail;
    const check = await User.findOne({email})
    if(check){
        return res.status(400).json({message : "USER ALREADY EXISTS"})
    }
    const savedUser = await data.save()
    console.log("savedUser",savedUser)
    return res.status(200).json(savedUser)

    }catch(error){
        res.status(500).json({ error :"INTERNAL SERVER ERROR"})
    }
}


export const getRecords = async (req,res) => {
    try{
     const records = await User.find()
     console.log("records",records)
     if(records.length === 0){
        return res.status(404).json({message : "USER NOT FOUND"})
     }
     return res.status(200).json(records)
    }catch(error){
        res.status(500).json({ error :"INTERNAL SERVER ERROR"})
    }
}


export const sample  = async (req,res) => {
    try{
        return res.json("HELLO WORLD")

    }catch(error){
        res.status(500).json({ error :"INTERNAL SERVER ERROR"})
    }
}


export const updateRecords = async (req,res) => {
    try{
        const { id } = req.body
        const unique = await User.findById(id)
        console.log("unique",unique)
        if(!unique) {
            return res.status(404).json({message : "USER NOT FOUND"})
        }
        const updatedData = await User.findByIdAndUpdate(id,req.body,{new :true})
        return res.status(200).json(updatedData)

    }catch(error){
        res.status(500).json({ error :"INTERNAL SERVER ERROR"})
    }
}


export const getRecordById = async (req,res) => {
    try {
        const getid = req.query.id
        const data = await User.findById(getid)
        if(!data){
            return res.status(404).json({message : "DATA NOT EXISTS"})
        }
        return res.status(200).json(data)

    }catch(error){
        res.status(500).json({ error :"INTERNAL SERVER ERROR"})
    }

}

export const deleteById = async (req,res) => {
    try {
        const id = req.query.id;
        const user = await User.findByIdAndDelete(id)
        if(!user){
            return res.status(404).json({message : "USER NOT FOUND"})
        }
        return res.status(200).json({meassage : "DELETED SUCCESSFULLY"})

    }catch(error){
        res.status(500).json({ error :"INTERNAL SERVER ERROR"})
    }
}