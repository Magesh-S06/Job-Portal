import { createContext, useContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";
import axios from "axios";

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({children}) =>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [searchFilter, setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [isSearched, setIsSearched] = useState(false)

    const[jobs, setJobs] = useState([])

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)

    const [companyToken, setCompanyToken] = useState(null)
    const [companyData, setCompanyData] = useState(null)

    // Function to fetch job data
    const fetchJobs = async () => {
        setJobs(jobsData)
    }

    const fetchCompanyData = async () => {
        try {
            const {data} = await axios.get(backendUrl+'/api/company/company',{headers:{token:companyToken}})
            if(data.success){
                setCompanyData(data.company)
            } else{
                toast.error(data.message)
            }
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchJobs()
        const storedCompanyToken = localStorage.getItem('companyToken')
        if (storedCompanyToken) {
            setCompanyToken(storedCompanyToken)
        }
    },[])

    const value= {
        searchFilter,setSearchFilter,
        isSearched,setIsSearched,
        jobs, setJobs,
        showRecruiterLogin, setShowRecruiterLogin,
        companyToken,setCompanyToken,
        companyData,setCompanyData,
        backendUrl
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}