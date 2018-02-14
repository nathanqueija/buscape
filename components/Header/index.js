import React, { Component } from 'react';
import MenuButton from './MenuButton';
import { connect } from 'react-redux';

class Header extends Component{
  render(){

    const {produtos} = this.props;
    return(
      <header>

        <style jsx>{`
          .logo{
            padding: 10px;
            margin-left: 5px;
          }

          .logo img{
           max-width: 100%;
            max-height: 100%;
          object-fit: contain;
          }

          .badge{
          cursor: pointer;
          position: absolute;

          box-sizing: border-box;
          }

          .carrinho-badge{
          height: 20px;
          width: 20px;
          background: #d62a33;
          border-radius: 50px;
          display: grid;
          align-content: center;
          justify-content: center;
          margin-top: 35px;
          }

          .carrinho-badge p{
          color: white;
          user-select: none;
          }
    `}</style>
        <div className="logo">
        <img src="/static/logo.png" alt="Logo do Buscapé" />
        </div>

        <div>
        </div>
        <div onClick={this.props.onChange}>
          {produtos.carrinho.length > 0 ?
          <div className="badge">
            <div className="carrinho-badge"><p>{produtos.carrinho.length}</p></div>
          </div> : ''}
          <MenuButton/>
        </div>
      </header>
    )
  }
};

const mapStateToProps = ({ produtos }) => ({
  produtos,
});

export default connect(mapStateToProps, null)(Header);