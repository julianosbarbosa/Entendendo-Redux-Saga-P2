import React, { Component, Fragment } from "react";

// import { Container } from './styles';

export default class Main extends Component {
  state = {
    repositoryInput: ""
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuario/repositorio"
            value={this.state.repositoryInput}
            onchange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
        </form>
        <ul>
          <li>
            <p>
              <strong>facebook/react</strong> (A declarative, efficient, and
              flexible JavaScript library for building user interfaces)
            </p>
            <a href="https://github.com/facebook/react">Acessar</a>
          </li>
        </ul>
      </Fragment>
    );
  }
}
