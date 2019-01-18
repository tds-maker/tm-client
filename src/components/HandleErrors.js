import React from 'react'
import { onComponentError, reportError } from '../utils/log'

class HandleErrors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ error });
      onComponentError(error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return (
                <div onClick={() => reportError()}>Report feedback</div>
            )
        } else {
            return this.props.children;
        }
    }
}

export default HandleErrors