import { ErrorBoundaryState } from '@/types/types';
import React, { Component, PropsWithChildren } from 'react';
import styles from './ErrorBoundary.module.scss';

class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error, info.componentStack);
    this.setState({ error });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <div className={styles.error__wrapper}>
          <div className={styles.error__container}>
            <h1 className={styles.error__title}>An error was detected!</h1>
            <p className={styles.error__description}>{error.message}</p>
            <p className={styles.error__stack}>{error.stack}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
