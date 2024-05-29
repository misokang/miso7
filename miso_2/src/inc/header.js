import React, { Component } from 'react';
import { Route, Link, Routes} from 'react-router-dom';
import axios from 'axios';
import '../App.css';


import Modal from 'react-awesome-modal';
class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true,
            id : "",
            password : "",
        }
    }

   

    
  _openModal = function() {
    this.setState({
        visible : true
    });
  }

  _closeModal = function() {
    this.setState({
        visible : false
    });
  }
  
    
  _changeID = function() {
    const id = document.getElementsByName('id')[0].value;
    console.log(id)
  }

  _changePW = function() {
    const password = document.getElementsByName('password')[0].value;

    console.log(password)
   

  }
  _selectUserData = async (e) => {
    const res = await axios('/send/pw', {
      method : 'POST',
      data : this.state,
      url : 'localhost:4000',
      headers: new Headers()
      })

      if(res.data) {
        console.log(res.data)
      }
   }


  render() {

    return (
        <div class='header_grid'>
            <div> </div>
            <div className='acenter'>
                <Routes>
                <Route path="/"/>
                </Routes>
                <Link className='link_tit' to='/'> <h3> Sejun's Blog </h3> </Link>

            </div>

            <div className='acenter'> 
            <h5 onClick={() => this._openModal()}> 관리자 로그인 </h5>
  <Modal visible={this.state.visible} 
                       width="400" height="360"
                       effect="fadeInDown" 
                       onClickAway={() => this._closeModal()}
                >
                  <div>
                    <h4 className='acenter login_tit'> 관리자 로그인 </h4>
                    <form>
                    <div className='login_div'>
                      <div className='login_input_div'>
                        <p> 관리자 ID </p>
                        <input type='text' name='id' onChange={() => this._changeID()}
/>
                      </div>

                      <div className='login_input_div' style={{ 'marginTop' : '40px'}}>
                        <p> 관리자 Password </p>
                        <input type='text' name='password'  onChange={() => this._changePW()}

 />
                      </div>

                      <div className='submit_div'>
                        <div> <input type='button' value='로그인' onClick={() => this._selectUserData()}/> </div>
                        <div> <input type='button' value='취소' onClick={() => this._closeModal()}/> </div>
                      </div>
                    </div>
                    </form>
                  </div>
                </Modal>

            </div>
        </div>
        
    );
  }
}

export default header;


