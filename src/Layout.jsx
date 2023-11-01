import React from 'react'
import {  Col, Nav, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
     <header>
    <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
      <Nav.Item>
        <Link className="nav-link" to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/register">Register</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/login">login</Link>
      </Nav.Item>
    </Nav>
    </header> <main>
        <Row className='h-100'>
          <Col sm={4}><aside>Aside</aside></Col>
            <Col sm={8}>
              <Outlet/>
            </Col>
        </Row>
      </main> 
      <footer>foot</footer>  
    </>
  )
}
