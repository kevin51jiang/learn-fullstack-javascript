import React from "react";
import Header from './Header';
import ContestList from './ContestList';


const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

class App extends React.Component {


    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };

    fetchContest = (contestId) => {
        pushState(
            { currentContestID: contestId },
            `/contest/${contestId}`
        );
    };


    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <ContestList
                    onContestClick={this.fetchContest}
                    contests={this.state.contests} />
            </div>
        )
    }
};

export default App;