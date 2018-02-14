import React, { Component } from 'react';
import Head from 'next/head'
import styles from '../styles/style.css';
import Header from '../components/Header';
import Carrinho from '../components/Carrinho';

class Layout extends Component {

  constructor(){
    super();
    this.state = {
      open: false,
    }

    this.abrirCarrinho = this.abrirCarrinho.bind(this);
  }

  abrirCarrinho(){
    this.setState({open: !this.state.open});
  }

  render() {

    const {children, title = 'Buscapé'} = this.props;
    const {open} = this.state;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8'/>
          <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        </Head>
        <style jsx global>{styles}</style>
        <Header onChange={this.abrirCarrinho}/>
        {open && <Carrinho/>}
        {children}
      </div>
    )
  }
}

export default Layout;