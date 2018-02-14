import { ADD_PRODUTO_CARRINHO } from './';
import { REMOVER_PRODUTO_CARRINHO } from './';


export function addProduto(produto) {
  return async dispatch => {
    dispatch({ type: ADD_PRODUTO_CARRINHO, payload: produto });
  };
}

export function removerProduto(produto) {
  return async dispatch => {
    dispatch({ type: REMOVER_PRODUTO_CARRINHO, payload: produto });
  };
}