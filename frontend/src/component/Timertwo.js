import React, { Component } from 'react';
import moment, { duration } from 'moment';

class Timertwo extends Component {
    state = {
        mins: 0,
        secs: 0
    };

    setTimertwo() {
        const stopWatch = moment(this.props.stopWatch)

        const clockDuration = duration(futureDate)
    }

    render() {
        return (
            <div className = "timertwo">
                {Object.keys(this.state), map((key, i) => {
                    <div className = "tiemrtwo-segment">
                        <span className = "timertwo-segment-number">
                            {this.state[key]}
                        </span>
                        <span className = "timertwo-segment-caption">
                            {key.toUpperCase()}
                        </span>
                    </div>
                })}
                
            </div>
        );
    }
}
