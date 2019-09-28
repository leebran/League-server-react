import React from 'react'
import ReactDOM from 'react-dom'

export default class Dropdown extends React.Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <div className="dropdown" onClick={this.toggleOpen}>
                <header
                    className="dropdown-toggle"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                >
                    LeagueFinder
                </header>
                <div className={menuClass} aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#nogo">
                        Profile
                    </a>
                    <a className="dropdown-item" href="#nogo">
                        Teams
                    </a>
                    <a className="dropdown-item" href="#nogo">
                        Settings
                    </a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Dropdown />, document.getElementById("root"));
