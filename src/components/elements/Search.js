import React, { Component } from 'react';
import Map from './Map';
import Header from './HeaderSearch'
import { getUsername } from '../../helpers/common';


class Search extends Component {

	render() {

		return(

			<div class="alldiv" style={{ margin: '100px' }}>
				<div >
				<Header/>
				</div>
				<h2 style={{alignContent:"center"}}>Welcome {getUsername()}, Search for your next destination!</h2>
				<div>
				<Map
					google={this.props.google}
					center={{lat: 18.5204, lng: 73.8567}}
					height='300px'
					zoom={15}
				/>
				</div>
				{/* console.log(getSearchData) */}
			</div>
		);
	}
}

export default Search;
