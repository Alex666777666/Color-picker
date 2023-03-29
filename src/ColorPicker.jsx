import React, { Component } from 'react'

class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false,
      color: '',
    }
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }
  mouseEnter(color) {
    this.setState({ isHovered: true, color })
  }

  mouseLeave(color) {
    this.setState({ isHovered: false, color })
  }
  render() {
    const { isHovered, color } = this.state
    return (
      <div>
        <div className='picker__title'>{color}</div>
        <div>
          <button
            className='picker__button picker__button_coral'
            onMouseEnter={() => this.mouseEnter('Coral')}
            onMouseLeave={() => this.mouseLeave('')}></button>
          <button
            className='picker__button picker__button_aqua'
            onMouseEnter={() => this.mouseEnter('Aqua')}
            onMouseLeave={() => this.mouseLeave('')}></button>
          <button
            className='picker__button picker__button_bisque'
            onMouseEnter={() => this.mouseEnter('Bisque')}
            onMouseLeave={() => this.mouseLeave('')}></button>
        </div>
      </div>
    )
  }
}

export default ColorPicker
