import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Hoc from "../hoc/Hoc";
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    constructor() {
      super();
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => this.setState({ error: error })
      );
    }

    errorConfirmedHandler = () => this.setState({ error: null });

    render() {
      return (
        <Hoc>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Hoc>
      );
    }
  };
};

export default withErrorHandler;