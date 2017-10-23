import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


class PopularPosts extends Component {
	render() {
		return(
			<div className="popular-posts">
				<h3>Popular Posts</h3>
				<nav>
					<ul>
						<li><NavLink to={{pathname: "/articles/30"}}>➢ Advocacy and Cultural Literacy Roundup Vol. 1</NavLink></li>
						<li><NavLink to={{pathname: "/articles/28"}}>➢ The 5 Toughest Mental Health Lessons from Residency</NavLink></li>
						<li><NavLink to={{pathname: "/articles/19"}}>➢ Futile Pursuit of Balance: Set Boundaries Instead</NavLink></li>
						<li><NavLink to={{pathname: "/articles/18"}}>➢ 7 Things I’m Excited For This Fall</NavLink></li>
						<li><NavLink to={{pathname: "/articles/3"}}>➢ 10 Tips for Orienting Yourself to a New Job</NavLink></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default PopularPosts