import React from 'react'

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const Header= () => {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  )
}

export default Header; 