import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoritesActions from "../../store/actions/favorites";

class Main extends Component {
  state = {
    repositoryInput: ""
  };

  handleAddRepository = e => {
    e.preventDefault();
    this.props.addFavoriteRequest(this.state.repositoryInput);
    this.setState({ repositoryInput: "" });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuario/repositorio"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          {this.props.favorites.loading && <span> Carregando...</span>}
          {!!this.props.favorites.error && <span> Algo deu errado!!!</span>}
        </form>
        <ul>
          {this.props.favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> ({favorite.description})
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
