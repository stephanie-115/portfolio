import React from "react";

const Button = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

const DownloadButton = () => {
  const handleDownload = () => {
    window.open("https://moccasin-trish-6.tiiny.site/", "_blank");
  };

  return (
    <Button onClick={handleDownload} className="download-button">
      d o w n l o a d
    </Button>
  );
};

export default DownloadButton;
