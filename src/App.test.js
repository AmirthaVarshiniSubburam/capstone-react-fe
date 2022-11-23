import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home"

test('finding first header', () => {

  render(
    <BrowserRouter>
        <Routes>   
            <Route path="*" element= {<Home />}/>
        </Routes>
    </BrowserRouter>
        );
    
    const headingElement = screen.getByTitle("Header1")
    expect(headingElement).toBeInTheDocument();
});