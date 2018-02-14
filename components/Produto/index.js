import React, { Component } from 'react';
import PriceTag from '../PriceTag';
import Galeria from '../Galeria';
import {addProduto} from '../../actions/produtos';
import {connect} from 'react-redux';

class Produto extends Component{

  render(){

    const { produto, addProduto : add } = this.props;
    return(
      <div className="produto">
        <style jsx>
          {
            `

                 @media (max-width: 774px) {
                    .produto{
                        grid-template-columns: 1fr !important;
                    }

                    .produto__titulo{
                      min-width: 100%;

                      }
                }


                 @media (max-width: 470px) {
                    .produto__preco{
                        grid-template-columns: 1fr !important;
                    }

                     .produto__info{
                     width: 100% !important;
                     }
                }

                .produto{
                    min-height: 200px;
                    box-sizing: border-box;
                    background: white;
                    margin: 15px 8px;
                    border-radius: 3px;
                    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.14);
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    padding: 25px 10px;
                }

                .produto__info{
                   background: white;
                   box-sizing: border-box;
                }

                .produto__titulo{
                border-bottom: 1px solid #e6e6e6;
                font-weight: 400;
                display: inline-block;
                padding-bottom: 10px;
                max-width: 100%;
                min-width: 100%;

                }

                .produto__titulo p {
                    color: #444444;
                    font-size: 20px;

                }


               .produto__titulo p::after {
                   content: "";
                   color: red;
                   margin-left: 10px;
                }

                .produto__preco{
                    margin-top: 20px;
                    display: grid;
                    grid-template-columns: 200px 220px;
                    grid-gap: 20px;

                }

                .produto__condicao p:first-of-type{
                    color: #22b14c;
                    font-size: 25px;
                    font-weight: 400;

                }

                .produto__condicao--destaque{
                    font-weight: 500;
                    font-size: 30px;
                }

                .produto__condicao p:last-of-type{
                    font-size: 14px;
                      color: #444444;
                }

                .preco{
                    color: #22b14c;
                }

                .adicionarBtn{
                    background: #22b14c;
                    border-radius: 2px;
                    padding: 10px;
                    color: white;
                    align-self: start;
                    cursor: pointer;
                    user-select: none;
                }

                .adicionarBtn p::after {
                   content: ">";
                   color: white;
                   margin-left: 10px;
                   font-weight: 700;
                }
            `
          }
        </style>

        <Galeria images={produto.images}/>
        <div className="produto__info">
          <div className="produto__titulo">
            <p>
              {produto.name}
            </p>
            <i></i>
          </div>
          <PriceTag/>
          <div className="produto__preco">
            <div className="produto__condicao">
              <p>10x R$ <span className="produto__condicao--destaque">366,56</span></p>
              <p>ou R$<span className="preco"> 3.199,00</span> à vista</p>
            </div>
            <div className="adicionarBtn" onClick={() => add(produto)}>
              <p>
            Adicionar ao carrinho
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(null, {addProduto})(Produto);