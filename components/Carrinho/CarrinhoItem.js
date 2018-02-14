import {removerProduto} from '../../actions/produtos';
import { connect } from 'react-redux';
const CarrinhoItem =  ({produto, removerProduto}) => {
  return(
    <div className="carrinho-item">
      <style jsx>
        {
          `
          .carrinho-item{
          background: #c49d00;
          min-height: 100px;
          margin-top: 3px;
          padding: 20px;
          display: grid;
          grid-template-columns: 100px 1fr;
          grid-gap: 10px;
           grid-template-areas:
            "img titulo"
            "img titulo"
            "img condicao"
            "img preco"
          }

          .produto__imagem{
            background: white;
            border: 1px solid black;
            grid-area: img;
            max-width: 100px;
            max-height: 100px;
            padding: 10px;
          }

          .produto__titulo{
          grid-area: titulo;
          color: white;
          display: grid;
          grid-template-columns: 1fr 20px;
          grid-gap: 10px;
          }

           .produto__remover{
         color: black;
         cursor: pointer;
         width: auto;
         font-weight: 600;
          }

          .produto__condicao{
          grid-area: condicao;
          }

          .produto__preco{
          grid-area: preco;
          }

          .produto__imagem img{
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          }

          `
        }
      </style>
        <div className="produto__imagem">
          <img src={produto.images[0]} alt="imagem" />
        </div>
        <p className="produto__titulo">{produto.name}
          <span onClick={() => removerProduto(produto)} className="produto__remover">X</span>
        </p>

        <p className="produto__condicao">
          {`${produto.price.installments}x R$ ${produto.price.installmentValue.toFixed(2).toString().replace('.', ',')}`}
        </p>
        <p className="produto__preco">
          {`ou R$ ${produto.price.value.toFixed(2).toString().replace('.', ',')} à vista`}
        </p>
    </div>

  )
}


const mapStateToProps = ({ produtos }) => ({
  produtos,
});

export default connect(mapStateToProps, {removerProduto})(CarrinhoItem);