import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './scamper-info.css';

class ScamperInfo extends Component {
	state = {
    	current_run: {
    		date: new Date(),
    		distance: null,
    		time: null,
    	}
    }

  	handleChange = (date) => {
    	this.setState({
      		current_run: { distance: this.props.props.current_run.distance, time: this.props.props.current_run.time, date } 
    	});
  	}

  	componentDidMount = () => {
  		this.setParams(this.props.props.current_run);
  	}

  	setParams = ({ date, distance, time }) => {
  		this.setState({
  			current_run: { distance, time, date: new Date(+date) }
  		})
  	}

  	render() {

	    return (
	    	<div className="scamper-info-container">
	    		<Link to={{ pathname: '/jogs' }} className="close">
	    			<svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25">
					    <path fill="#FFF" fillRule="evenodd" d="M16.922 12.948a.528.528 0 0 1 0-.794l9-8.527c.24-.227.358-.57.358-.793 0-.227-.118-.57-.358-.8L24.24.441a1.322 1.322 0 0 0-.837-.338c-.364 0-.605.111-.845.338l-9 8.527a.6.6 0 0 1-.838 0L3.72.44a1.335 1.335 0 0 0-.837-.338c-.24 0-.603.111-.845.338L.357 2.034c-.24.23-.357.573-.357.8 0 .222.117.566.357.793l9 8.527c.24.228.24.567 0 .794l-9 8.526c-.24.228-.357.572-.357.8 0 .228.117.566.357.793l1.681 1.593c.242.228.605.34.845.34.234 0 .597-.112.837-.34l9-8.526a.6.6 0 0 1 .838 0l9 8.526c.24.228.604.34.845.34.24 0 .597-.112.837-.34l1.682-1.593c.24-.227.358-.565.358-.793a1.2 1.2 0 0 0-.358-.8l-9-8.526z"/>
					</svg>
	    		</Link>
	    		<div className="info">
		    		<div className="distance">
		    			<span>Distance</span>
		    			<input defaultValue={ this.state.current_run.distance == null ? "" : this.state.current_run.distance }></input>
		    		</div>	
		    		<div className="Time">
		    			<span>Time</span>
		    			<input defaultValue={ this.state.current_run.time == null ? "" : this.state.current_run.time }></input>
		    		</div>	
		    		<div className="Date">
		    			<span>Date</span>
		    			<DatePicker
							selected={this.state.current_run.date}
							onChange={this.handleChange}
							calendarClassName="calendar"
						/>
		    		</div>
		    		<div className="btn">
		    		 	<Link to={{ pathname: '/jogs' }} className="save-changes">Save</Link>
		    		 </div>
		    	</div>
	    	</div>
	    );
	}
}

export default ScamperInfo;
