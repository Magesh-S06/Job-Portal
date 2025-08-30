import Job from "../models/Job.js"


export const getJobs = async (req,res) => {
    try {
        const jobs = await Job.find({visible:true})
        .populate({path:'companyId',select:"-password"})

        res.json({success:true,jobs})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const getJobById = async (req,res) => {
    try {
        const {id} = req.params
        const job = await Job.findById(id)
        .populate({
            path:'companyID',
            select:'-password'
        })
        if(!job){
            res.json({success:false,message:'Job not found'})
        }
        res.json({sucess:true,job})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}