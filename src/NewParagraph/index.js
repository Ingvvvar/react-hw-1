import React from 'react';

class NewParagraph extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const name = 'Vasilisa';

    return (
      <p className="App-p">My name, {name}</p>
    )
  }
}

export default NewParagraph;