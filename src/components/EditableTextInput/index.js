import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {isSaved: false, inputText: ''}

  onChangeInputText = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  onClickSave = () => {
    this.setState(prevstate => ({isSaved: !prevstate.isSaved}))
  }

  renderInputCard = () => {
    const {inputText} = this.state
    return (
      <div className="card">
        <h1 className="heading">Editable Text Input</h1>
        <div className="input-btn-cont">
          <input
            type="text"
            className="input"
            onChange={this.onChangeInputText}
            value={inputText}
          />
          <button className="Button" type="button" onClick={this.onClickSave}>
            Save
          </button>
        </div>
      </div>
    )
  }

  renderEditCard = () => {
    const {inputText} = this.state
    return (
      <div className="card">
        <h1 className="heading">Editable Text Input</h1>
        <div className="input-btn-cont">
          <p className="text">{inputText}</p>
          <button className="Button" type="text" onClick={this.onClickSave}>
            Edit
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {isSaved} = this.state
    return (
      <div className="bg-container">
        {isSaved ? this.renderEditCard() : this.renderInputCard()}
      </div>
    )
  }
}
export default EditableTextInput
