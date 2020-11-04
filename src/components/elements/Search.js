import React, { Component } from 'react';
import Map from './Map';
import Header from './HeaderSearch'

class Search extends Component {

	render() {

		return(

			<div style={{ margin: '100px' }}>
				<div >
				<Header/>
				</div>
				
				<Map
					google={this.props.google}
					center={{lat: 18.5204, lng: 73.8567}}
					height='300px'
					zoom={15}
				/>
				{/* console.log(getSearchData) */}
			</div>
		);
	}
}

export default Search;
