import React from 'react';
import VersionA from './VersionA';
import VersionB from './VersionB';

import './styles.css';

class SampleComponent extends React.Component {
  state = {
    version: null,
  }

  componentDidMount() {
    this.unsubscribe = window.__splitTest
      .subscribe('SampleComponent', version => this.setState({ version }));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { version } = this.state;

    switch (version) {
      case 'a':
        return <VersionA />;
      case 'b':
        return <VersionB />;
      default:
        return null;
    }
  }
};

export default SampleComponent;
