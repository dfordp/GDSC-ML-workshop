import React, { useEffect } from 'react';

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
          Student Support Window
        </div>
        <div>
          <input type="text" id="searchWidgetTrigger" className="rounded-md outline-2 bg-gray-100 py-2 px-2" placeholder="Enter Your Query"/>
          <div dangerouslySetInnerHTML={{ __html: `
            <gen-search-widget
              configId="551d7329-e6f8-4bb0-aba5-304911d6abe2"
              triggerId="searchWidgetTrigger">
            </gen-search-widget>
          ` }} />
        </div>
        <div>
          GDSC & YMCA Logo
        </div>
      </div>
    </div>
  )
}