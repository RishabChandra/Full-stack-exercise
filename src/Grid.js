import React, { useState } from 'react';
import './Grid1.css';
import data from './Data';

const Grid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qclicked, setQclicked] = useState(1)
  const gridElements = data
  const findNameById = (id) => {
    const foundItem = gridElements.find((item) => item.id === id);
    return foundItem ? foundItem.answer : 'Name not found';
  };
  const handleElementClick = (id) => {
    setIsModalOpen(true);
    setQclicked(id)
    findNameById(id)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const question = (index, question) => {
    return (<div><h2>Quesion: {index + 1}</h2>
      <p> {question}</p></div>)
  }


  return (
    <div className="grid-container">
      {gridElements.map((element, index) => (
        <div key={index} className='grid-item' onClick={() => {
          // handler(index);
          handleElementClick(element.id)
        }}>
          {/* {isClicked[index] ? answer() : question(index, element.question)} */}
          {question(index, element.question)}
        </div>
      ))}

      {isModalOpen && (
        <div className="modal-background">
          <div className="modal-content">
            <h1>Answer:</h1>
            <p>{findNameById(qclicked)}</p>
            <>
              {qclicked === 1 ? <img className="image1" src="./q1.jpg" sizes='10px' alt='image1' ></img> : ""}
              {qclicked === 3 ? <img className="image1" src="./q3.jpg" sizes='10px' alt='image3' ></img> : ""}
              {qclicked === 2 ? <img className="image" src="./q2.jpg" sizes='40px' alt='image2'></img> : ""}
              {qclicked === 9 ? <a href='https://www.google.com'>Web interface code<br></br><a href='https://usfedu-my.sharepoint.com/personal/rishabchandra_usf_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frishabchandra%5Fusf%5Fedu%2FDocuments%2Fvisualization%2Epdf&parent=%2Fpersonal%2Frishabchandra%5Fusf%5Fedu%2FDocuments&ga=1'>Data visualization code</a></a> : ""}

            </>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Grid;
