import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="flex font-poppin min-h-screen">
        {true && (
          <div className="w-2/12 md:w-1/6 lg:w-1/12 transition-all duration-500 ease-in-out">
            {/* <NavBar onUserIconClick={() => setShowProfile(true)} /> */}
          </div>
        )}
        <div className="w-1/12 md:w-1/6 lg:w-1/12 hidden md:block">
          {/* <NavBar onUserIconClick={() => setShowProfile(true)} /> */}
        </div>
        <div className={`${true ? "w-[80%]" : "w-11/12"} md:w-5/6 lg:w-11/12 flex flex-col`}>
          {/* <Header /> */}
          <div className="flex flex-col md:flex-row w-full flex-1 mb-4">
            {/* <div className="w-full md:w-1/2"><News /></div> */}
            <div className="w-[100%] md:w-1/2 md:mr-5">
              {/* <Sector color="bg-[#1E2D2D]" nav={visible} /> */}
            </div>
          </div>
          {/* <Provider store={store}> */}
            <div className="flex flex-col md:flex-row flex-1">
              <div className="flex-1 flex flex-col m-4 ml-4 md:ml-16">
                <p className="ml-5 md:ml-2 mb-1 md:mb-2 text-zinc-400 w-fit">Markets</p>
                <div className="flex-1 flex flex-col bg-[#0F0F14] w-full">
                  {/* <Overview /> */}
                </div>
              </div>
              <div className="flex-1 flex flex-col mr-0 md:mr-[4em] ml-4 md:ml-0">
                <div className="flex-1 flex flex-col bg-[#0F0F14] mt-11">
                  {/* <Chart nav={visible} /> */}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row flex-1 mt-[2em]">
              <div className="flex-1 flex flex-col m-4 ml-2 md:ml-16">
                {/* <p className="ml-6 md:ml-2 mb-1 md:mb-2 text-zinc-400 w-fit">Markets</p> */}
                <div className="flex-1 flex flex-col ml-2 bg-[#0F0F14] w-full">
                  {/* <BarChart nav={visible} /> */}
                </div>
              </div>
              <div className="flex-1 flex flex-col mr-0 md:mr-[4em] ml-2 md:ml-0">
                <div className="flex-1 flex flex-col bg-[#0F0F14] mt-5 ml-2 mb-4">
                  {/* <ScatterPlot nav={visible} /> */}
                </div>
              </div>
            </div>
          {/* </Provider> */}
        </div>
      </div>
      {/* {showProfile && <Profile onClose={() => setShowProfile(false)} />} */}
      {/* <button
        className="absolute top-[10.8em] left-4 border-green-400 border-2 hover:bg-blue-600 duration-200 ease-linear text-white p-2 rounded-full md:hidden"
        onClick={toggleBar}
      >
        {visible ? 'X' : 'Menu'}
      </button> */}
    </>
  );
}

export default App;
