import React from "react";

function Logo3D() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <iframe
        src="/logo_3d.html" 
        width="600"
        height="500"
        style={{ border: "none", maxWidth: "100%" }}
      />
    </div>
  );
}

export default Logo3D;
