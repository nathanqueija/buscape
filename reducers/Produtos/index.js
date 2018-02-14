import { ADD_PRODUTO_CARRINHO, REMOVER_PRODUTO_CARRINHO } from '../../actions';

const data = require('../../resources/data.json');

const INITIAL_STATE = {
  all: data.items,
  carrinho: []
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PRODUTO_CARRINHO:
      const selected = state.carrinho.filter(produto => produto.id === action.payload.id);
      return { ...state, carrinho: selected.length > 0 ? state.carrinho :  [...state.carrinho, action.payload]};
    case REMOVER_PRODUTO_CARRINHO:
      const filtered = state.carrinho.filter(produto => produto.id !== action.payload.id);
      return { ...state, carrinho: filtered};
    default:
      return state;
  }
}