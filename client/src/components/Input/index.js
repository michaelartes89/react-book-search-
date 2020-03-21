import React from "react";


function Input(props) {
  return (
    <div className="input-group input-group-lg" style={{ marginBottom: 15 }}>
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

export default Input;