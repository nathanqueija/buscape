import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../utils/store';
import Layout from '../components/Layout';
import Produto from '../components/Produto';


class Index extends Component{

    render(){
      const { produtos } = this.props;
        return(
            <Layout>
                <div className="produtos">
                  {produtos.all.map(produto => <Produto key={produto.product.id} produto={produto.product}/>)}
                </div>
            </Layout>
        );
    }
}


const mapStateToProps = ({ produtos }) => ({
  produtos,
});

export default withRedux(initStore, mapStateToProps, null)(Index);