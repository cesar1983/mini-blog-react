import React, { Component } from "react";

/**
 * Componente criado para Lazy Loading de componentes. ( assincrona )
 *
 * Quando algum componente não precisa ser carregado no chunk principal,
 * isso pode ser útil pra ter um app de carregamento mais rápido.
 *
 * Pode ser feito usando React Suspense a partir do React 16.6
 *
 * @param {*} importComponent
 */
const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      importComponent().then((cmp) => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
