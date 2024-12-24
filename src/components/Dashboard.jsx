import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Repositories");
  const [isMenuOpen, setIsMenuOpen] = useState(() => {
    // Retrieve sidebar state from localStorage or default to true for devices >= md
    const savedState = localStorage.getItem("isMenuOpen");
    return savedState ? JSON.parse(savedState) : window.innerWidth >= 768;
  });
  const [repositories, setRepositories] = useState(() => {
    // Retrieve repositories from localStorage or default to an empty array
    const savedRepos = localStorage.getItem("repositories");
    return savedRepos ? JSON.parse(savedRepos) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSmallScreen = window.innerWidth < 768;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
        localStorage.setItem("isMenuOpen", true);
      } else {
        setIsMenuOpen(false);
        localStorage.setItem("isMenuOpen", false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
    if (isSmallScreen) {
      setIsMenuOpen(false);
      localStorage.setItem("isMenuOpen", false);
    }
  };

  const handleToggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    localStorage.setItem("isMenuOpen", newMenuState);
  };

  const handleAddRepository = (repository) => {
    const updatedRepositories = [...repositories, repository];
    setRepositories(updatedRepositories);
    localStorage.setItem("repositories", JSON.stringify(updatedRepositories));
  };

  return (
    <>
      <div className="md:flex font-inter">
        <div
          className={`md:w-[242px] bg-white ${isMenuOpen ? "" : "md:hidden"}`}
        >
          <div className="flex items-center justify-between text-2xl p-2">
            <img src="/logo4.png" alt="codeant logo" />
            <div>
              <button onClick={handleToggleMenu}>
                <img src="/ham.png" alt="Hamburger logo" />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className={`w-full bg-white ${isSmallScreen ? "absolute" : ""}`}>
              <div className="p-2 mt-2 md:flex items-center">
                <div className="bg-gray-50 p-1 w-full border-gray-100 border-2 rounded-md flex items-center justify-between">
                  <div className="truncate">navjot</div>
                  <img src="chevron-down.png" className="fill-black" />
                </div>
              </div>
              <div className="m-2 md:block">
                <ul className="list-none p-2 space-y-1">
                  <li
                    className={`flex items-center p-1 gap-2 rounded-lg pl-2 cursor-pointer ${
                      selectedTab === "Repositories" ? "bg-blue-500 text-white" : "text-gray-800"
                    }`}
                    onClick={() => handleTabSelect("Repositories")}
                  >
                    <img
                      src="/home.png"
                      className={`${selectedTab === "Repositories" ? "" : "filter invert"}`}
                    />
                    <span className="text-md">Repositories</span>
                  </li>
                  <li
                    className={`flex items-center p-1 gap-2 rounded-lg pl-2 cursor-pointer ${
                      selectedTab === "AI Code Review" ? "bg-blue-500 text-white" : "text-gray-800"
                    }`}
                    onClick={() => handleTabSelect("AI Code Review")}
                  >
                    <img
                      src="/code.png"
                      className={`${selectedTab === "AI Code Review" ? "filter invert" : ""}`}
                    />
                    <span className="text-md">AI Code Review</span>
                  </li>
                  <li
                    className={`flex items-center p-1 gap-2 rounded-lg pl-2 cursor-pointer ${
                      selectedTab === "Cloud" ? "bg-blue-500 text-white" : "text-gray-800"
                    }`}
                    onClick={() => handleTabSelect("Cloud")}
                  >
                    <img
                      src="/cloud.png"
                      className={`${selectedTab === "Cloud" ? "filter invert" : ""}`}
                    />
                    <span className="text-md">Cloud</span>
                  </li>
                  <li
                    className={`flex items-center p-1 gap-2 rounded-lg pl-2 cursor-pointer ${
                      selectedTab === "How to use" ? "bg-blue-500 text-white" : "text-gray-800"
                    }`}
                    onClick={() => handleTabSelect("How to use")}
                  >
                    <img
                      src="/book.png"
                      className={`${selectedTab === "How to use" ? "filter invert" : ""}`}
                    />
                    <span className="text-md">How to use</span>
                  </li>
                  <li
                    className={`flex items-center p-1 gap-2 rounded-lg pl-2 cursor-pointer ${
                      selectedTab === "Settings" ? "bg-blue-500 text-white" : "text-gray-800"
                    }`}
                    onClick={() => handleTabSelect("Settings")}
                  >
                    <img
                      src="/settings.png"
                      className={`${selectedTab === "Settings" ? "filter invert" : ""}`}
                    />
                    <span className="text-md">Settings</span>
                  </li>
                  <li>
                    <div className="md:absolute md:bottom-0">
                      <a href="https://navjotsinghportfolio.netlify.app/" target="_blank">
                        <button
                          onClick={handleToggleMenu}
                          className="flex gap-2 m-2 items-center text-md"
                        >
                          <img src="/phone.png" alt="Support" />
                          <span> Support </span>
                        </button>
                      </a>
                      <button
                        className="flex m-2 items-center text-md"
                        onClick={() => navigate("/authentication")}
                      >
                        <img src="/logout.png" alt="Logout" />
                        <span>Logout </span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-100 md:min-h-screen w-full p-1">
          <div
            className={`bg-white w-full h-full rounded-lg p-1 ${isMenuOpen ? "z-48" : ""}`}
          >
            {selectedTab === "Repositories" && (
              <div>
                {repositories.length === 0 ? (
                  <div className="flex justify-between items-center">
                    <div className="text-xs md:text-xl md:p-2"> No repositories to show. </div>
                    <button onClick={() => setIsModalOpen(true)}>
                      <div className="flex gap-1 items-center justify-center bg-blue-500 text-white p-2 rounded-lg text-sm">
                        {" "}
                        <img src="/plus.png" alt="" /> Add Repositery{" "}
                      </div>
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="md:flex justify-between items-center p-2">
                      <div className="flex flex-col">
                        <span className="text-xl"> Repositories</span>
                        <span className="text-xs"> {repositories.length} total repositories</span>
                      </div>
                      <div className="flex gap-4 md:pt-0 pt-4 justify-between">
                        <div className="flex gap-1 items-center justify-center border-2 border-gray-200 p-2 rounded-lg text-sm">
                          {" "}
                          <img src="/refresh.png" alt="" /> Refresh All{" "}
                        </div>
                        <button onClick={() => setIsModalOpen(true)}>
                          <div className="flex gap-1 items-center justify-center bg-blue-500 text-white p-2 rounded-lg text-sm">
                            {" "}
                            <img src="/plus.png" alt="" /> Add Repositery{" "}
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="border-2 border-gray-200 lg:w-[366px] rounded-lg m-2 p-2 flex items-center gap-2">
                      <img src="/search.png" alt="search" />
                      <span> Search repositeries </span>
                    </div>
                    <div className="">
                      {repositories.length > 0 ? (
                        repositories.map((repo, index) => (
                          <div
                            key={index}
                            className="rounded-lg p-2 m-2 shadow-sm space-y-2 hover:bg-gray-200"
                          >
                            <div className="flex gap-6 items-center">
                              <h2 className="font-semibold">{repo.name}</h2>
                              <div className="text-xs bg-blue-50 p-1 rounded-lg text-blue-400 border w-auto border-blue-400">
                                {repo.visibility}
                              </div>
                            </div>

                            <div className="flex gap-8">
                              <p className="text-sm text-gray-700 flex items-center gap-2">
                                {repo.language}
                                <div className="bg-blue-500 h-2 w-2 rounded-full"> </div>
                              </p>
                              <p className="text-sm text-gray-700 flex items-center gap-2">
                                <img src="/database.png" alt="" />
                                {repo.size}KB
                              </p>
                              <p className="text-sm text-gray-700">
                                <span> Updated </span> {repo.lastUpdated}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500">No repositories added yet.</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            {selectedTab === "AI Code Review" && <div>Start your AI code review process here.</div>}
            {selectedTab === "Cloud" && <div>Cloud services information goes here.</div>}
            {selectedTab === "How to use" && <div>Learn how to use our application effectively.</div>}
            {selectedTab === "Settings" && <div>Modify your settings here.</div>}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSubmit={(data) => {
            handleAddRepository(data);
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Dashboard;
