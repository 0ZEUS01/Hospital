import React from "react";
import { BrowserRouter as Router, Route, Routes }from "react-router-dom";
import Home from "./Home";


function AAAA() {
return (
<Router>
<Routes>
<Route exact path="/Home" component={Home} />
</Routes>
</Router>
);
}
export default AAAA;
