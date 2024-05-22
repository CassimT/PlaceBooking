
import React from "react";
import AboutDataList from "./AboutDataList";
import AboutList from "./AboutList";

function AboutUs(props) {
  return (
    <div className="grid grid-cols-3 gap-2"> {/* Reduced gap-1 to gap-2 */}
      {AboutDataList.map((item, index) => (
        <AboutList 
          key={index} 
          imgpath={item.imgpath} 
          name={item.name} 
          position={item.position}
        />
      ))}
    </div>
  );
}

export default AboutUs;