import React, { Component } from 'react';
import CarrinhoItem from './CarrinhoItem';
import { connect } from 'react-redux';

class Carrinho extends Component{


  getTotalValue(){
    const {produtos} = this.props;

    const valorTotal =  produtos.carrinho.reduce(function(valorAnterior, valorAtual) {
      return valorAnterior + valorAtual.price.value;
    }, 0);

    return valorTotal;

  }

  render(){

    const {produtos} = this.props;
    const valorTotal = this.getTotalValue().toFixed(2);
    return (
      <div className="carrinho">

        <style jsx>
          {`
            .carrinho{
                background: #daaf00;
                width: 100%;
                height: auto;
                position: absolute;
                box-shadow: 0px 1px 6px 3px rgba(0,0,0,0.31);
                padding-bottom: 30px;
                z-index: 9999;
          }

          .carrinho__footer{
            margin: 20px 20px;
          }

           .carrinho__status{
            margin: 20px 20px;
          }

          .carrinho__footer > p{
            font-size: 16px;
            text-align: right;
            line-height: 25px;
          }

          .carrinho__footer p:first-of-type {
          border-bottom: 1px solid black;
          }


          `}
        </style>
        {produtos.carrinho.length > 0 ? produtos.carrinho
          .map(produto => <CarrinhoItem key={produto.id} produto={produto}/>) : <p className='carrinho__status'>Seu carrinho está vazio</p>}
        <div className="carrinho__footer">
          <p>subtotal</p>
          <p>{`10x R$ ${(valorTotal/10).toFixed(2).toString().replace('.', ',')}`}</p>
          <p>{`ou R$ ${valorTotal.toString().replace('.', ',')} à vista`}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ produtos }) => ({
  produtos,
});

export default connect(mapStateToProps, null)(Carrinho);