import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
          <Route exact path="/" element={<News key={'general'} pagesize={15} counrty={"in"} catagory={"general"} />} />

            <Route exact path="/health" element={<News key={'health'} pagesize={15} counrty={"in"} catagory={"health"} />} />

            <Route exact path="/science" element={<News key={'cience'} pagesize={15} counrty={"in"} catagory={"science"} />} />

            <Route exact path="/sports" element={<News key={'sports'} pagesize={15} counrty={"in"} catagory={"sports"} />} />

            <Route exact path="/technology" element={<News key={'technology'} pagesize={15} counrty={"in"} catagory={"technology"} />} />

            <Route exact path="/entertainment" element={<News key={'entertainment'} pagesize={15} counrty={"in"} catagory={"entertainment"} />} />

            <Route exact path="/business" element={<News key={'business'} pagesize={15} counrty={"in"} catagory={"business"} />} />
          </Routes>
           
        </Router>
      </div>
    );
  }
}

export default App;
