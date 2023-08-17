import React from 'react'
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import './Widgets.css'

function Widgets() {
    const newsArt = (heading, subtitle) => (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
    return (
      <div className="widgets">
        <div className="widgets__header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        {newsArt(
            "Galaxy Watch 6 Classic Launched",
            "Top news - 9009 readers"
        )}
        {newsArt(
            "Coronavirus: UK updates",
            "Top news - 4817 readers"
        )}
        {newsArt(
            "ISRO to hit brakes on Chandrayaan - 3 mission",
            "Top news - 3004 readers"
        )}
        {newsArt(
            "Monsoon Havoc continues in HP",
            "Top news - 1024 readers"
        )}
        </div>
    );
}

export default Widgets