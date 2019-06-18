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
                <button
                    className="btn-lg btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    href={`/course-list`}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                >
                    Region: NA
                </button>
                <div className={menuClass} aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href={`/`}>
                        Region: NA
                    </a>
                    <a className="dropdown-item" href="#nogo">
                        Region: EU
                    </a>
                    <a className="dropdown-item" href="#nogo">
                        Region: KR
                    </a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Dropdown />, document.getElementById("root"));
