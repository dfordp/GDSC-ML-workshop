import React, { useEffect } from 'react';
import gdscLogo  from "./assets/gdscLogo.png"
import ymcalogo from "./assets/ymcalogo.png"

export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cloud.google.com/ai/gen-app-builder/client?hl=en_GB";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-row justify-center ">
      <div className="flex flex-col justify-between h-[100vh]">
        <div>
          <div className='h-16 w-screen shadow-md flex flex-row'>
            <img src={gdscLogo} className='w-16'/>
            <div className='flex flex-col my-3 ml-2 text-xs font-medium gap-1'>
              <div>
                Google Developer Student Club
              </div> 
              <div>
                JC Bose University of Science & Technology, YMCA Faridabad
              </div>
            </div>
          </div>
          <h3 className="scroll-m-20 flex flex-row justify-center text-xl font-semibold mt-5">
            AI ChatBot Developed By GDSC Memebers
          </h3>
        </div>
        <div className='flex flex-row justify-center'>
          <input type="text" id="searchWidgetTrigger" className="rounded-md outline-2 bg-gray-100 py-2 px-2 w-64" placeholder="Enter Your Query"/>
          <div dangerouslySetInnerHTML={{ __html: `
            <gen-search-widget
              configId="551d7329-e6f8-4bb0-aba5-304911d6abe2"
              triggerId="searchWidgetTrigger">
            </gen-search-widget>
          ` }} />
        </div>
        <div className='flex flex-row justify-center gap-3 my-4'>
          <img src={gdscLogo} className='w-10 h-10'/>
          <img src={ymcalogo} className='w-10 h-10'/>
        </div>
      </div>
    </div>
  )
}