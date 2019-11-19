import React from 'react';
import { connect } from 'react-redux'
// import { Container } from './styles';

const Footer = ({ count }) => {
  return (
    <p>Você tem {count} favoritos</p>
  );
}
const mapStateToProps = state => ({
  count: state.favorites.length
});

export default connect(mapStateToProps)(Footer)
