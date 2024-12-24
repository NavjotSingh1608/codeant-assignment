import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Authentication = () => {

    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState("SAAS");
  
    return (
        <div className="flex  w-full min-h-screen bg-blue-500 font-inter ">
            <div className="bg-white w-full hidden lg:block">
                <div className='bottom-0 left-0 absolute m-2'>
                    <img src="/logo1.png" className='h-64' />
                </div>
                <div className="absolute bg-white drop-shadow-2xl rounded-2xl w-auto top-[200px] left-[130px]">
                    <div className='flex items-center xl:p-2 xl:mt-4 lg:p-1 lg:mt-2'>
                        <div className='xl:pl-4 lg:pl-2'>
                            <img src='/logo3.png' className='h-8' />
                        </div>
                        <div className="xl:text-xl font-semibold text-gray-800 xl:px-2 lg:px-1">
                            AI to Detect & Autofix Bad Code
                        </div>
                    </div>
                    <div className="h-[1px] bg-gray-200 text-xs w-full xl:my-4 lg:my-2"></div>
                    <div className="grid grid-cols-3 xl:gap-4 lg:gap-2 text-center xl:m-6 lg:m-4">
                        <div>
                            <div className="xl:text-xl lg:text-lg font-bold text-gray-800">30+</div>
                            <div className="xl:text-sm lg:text-xs text-gray-600">Language Support</div>
                        </div>
                        <div>
                            <div className="xl:text-xl lg:text-lg font-bold text-gray-800">10K+</div>
                            <div className="xl:text-sm lg:text-xs text-gray-600">Developers</div>
                        </div>
                        <div>
                            <div className="xl:text-xl lg:text-lg font-bold text-gray-800">100K+</div>
                            <div className="xl:text-sm lg:text-xs text-gray-600">Hours Saved</div>
                        </div>
                    </div>
                </div>

                <div className="absolute bg-white z-6 drop-shadow-2xl w-auto flex justify-around p-4 rounded-2xl pt-5 top-[358px] left-[337px]">
                    <div className='xl:-mt-2 xl:px-4 lg:px-2 lg:-mt-3'>
                        <img src='/logo2.png' className='h-12' />
                        <div className='font-inter xl:font-bold lg:font-semibold text-xs xl:mt-4 lg:mt-2'> Issues Fixed </div>
                        <div className='xl:text-4xl lg:text:2xl xl:font-bold lg:font-semibold mt-1'> 500K+ </div>
                    </div>
                    <div className='flex-col xl:px-4 lg:px-2'>
                        <div className='flex items-center text-s text-blue-600 font-bold xl:-ml-2 lg:-ml-1'>
                            <img src='/up.png' />
                            14%
                        </div>
                        <div className='text-xs'>
                            This week
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col items-center justify-center min-h-screen w-full p-10 bg-gray-50">
                <div className="bg-white rounded-lg shadow-lg w-full m-6">

                    <div className="text-center mb-2 p-6">
                        <img
                            src="/logo4.png"
                            alt="CodeAnt AI"
                            className="mx-auto mb-6"
                        />
                        <h1 className="text-2xl font-semibold text-gray-800">
                            Welcome to CodeAnt AI
                        </h1>
                    </div>

                    <div className={`flex justify-center mb-2 p-6 px-8 -space-x-2 `}>
                        <button
                            onClick={() => setSelectedTab("SAAS")}
                            className={`py-2 px-4 w-full text-2xl font-semibold rounded-lg  ${selectedTab === "SAAS"
                                ? "bg-blue-500 text-white z-10"
                                : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            SAAS
                        </button>
                        <button
                            onClick={() => setSelectedTab("Self Hosted")}
                            className={`py-2 px-4 w-full text-2xl font-semibold rounded-lg ${selectedTab === "Self Hosted"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            Self Hosted
                        </button>
                    </div>

                    <div className='h-[1px] bg-gray-200 my-6 mb-8 lg:mb-12 w-full'></div>

                    <div className="space-y-4 px-2 mx-2 lg:mx-44 min-h-[250px] lg:min-h-[260px] ">
                        {selectedTab === "SAAS" ?
                            <div>
                                <button className="w-full my-4 flex items-center justify-center py-2 border rounded-lg text-gray-700 hover:bg-gray-50" onClick={()=>navigate('/dashboard')}>
                                    <img
                                        src="/git.png"
                                        alt="GitHub"
                                        className="mr-2"
                                    />
                                    Sign in with GitHub
                                </button>
                                <button className="w-full my-4 flex items-center justify-center py-2 border rounded-lg text-gray-700 hover:bg-gray-50 " >
                                    <img
                                        src="/bit.png"
                                        alt="Bitbucket"
                                        className=" mr-2"
                                    />
                                    Sign in with Bitbucket
                                </button>
                                <button className="w-full my-4 flex items-center justify-center py-2 border rounded-lg text-gray-700 hover:bg-gray-50">
                                    <img
                                        src="/azure.png"
                                        alt="Azure DevOps"
                                        className="mr-2"
                                    />
                                    Sign in with Azure DevOps
                                </button>
                                <button className="w-full my-4 flex items-center justify-center py-2 border rounded-lg text-gray-700 hover:bg-gray-50">
                                    <img
                                        src="/lab.png"
                                        alt="GitLab"
                                        className="mr-2"
                                    />
                                    Sign in with GitLab
                                </button>
                            </div>
                            :
                            <div>
                                <button className="w-full my-4 flex items-center justify-center py-2 border rounded-lg text-gray-700 hover:bg-gray-50">
                                    <img
                                        src="/lab.png"
                                        alt="GitLab"
                                        className="mr-2"
                                    />
                                    Self Hosted GitLab
                                </button>
                                <button className="w-full my-4 flex items-center justify-center py-2 border rounded-lg text-gray-700 hover:bg-gray-50">
                                    <img
                                        src="/sso.png"
                                        alt="SSO"
                                        className="mr-2"
                                    />
                                    Sign in with SSO
                                </button>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-500 text-center">
                        By signing up you agree to the{" "}
                        <a href="#" className="text-black font-bold">
                            Privacy Policy
                        </a>.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Authentication