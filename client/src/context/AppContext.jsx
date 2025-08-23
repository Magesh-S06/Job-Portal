import { createContext, useContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({children}) =>{

    const [searchFilter, setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [isSearched, setIsSearched] = useState(false)

    const[jobs, setJobs] = useState([])

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)

    // Function to fetch job data
    const fetchJobs = async () => {
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs()
    },[])

    const value= {
        searchFilter,setSearchFilter,
        isSearched,setIsSearched,
        jobs, setJobs,
        showRecruiterLogin, setShowRecruiterLogin
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}