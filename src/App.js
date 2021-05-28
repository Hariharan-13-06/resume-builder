import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Body from './components/Body';
import Form from './components/Form';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function App() {

  const pdfExportComponent = React.useRef(null);

    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
          pdfExportComponent.current.save();
        }
      };

  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/resume">
            <Header exportPDF={exportPDFWithComponent} />
            <Body pdfExport={pdfExportComponent} />
          </Route>
          <Route path="/">
            <Header />
            <Form />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  overflow-y: overlay;
  background-color: #f3f2ef;
`