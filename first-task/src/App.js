import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import source from './components/Source';
import AddItem from './components/pages/AddItem';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App(){
	const [data, setData] = useState(source);
	useEffect(()=>{
		const nfDatas = JSON.parse(localStorage.getItem('nfDatas'));
    	if(nfDatas){
        	setData(nfDatas);
    	}
		// eslint-disable-next-line
	}, []);
	const addItem = (obj) => {
		const len = data.length;
		const newItem = {
			id: len+1,
			imgsrc: obj.imgUrl,
			title: obj.title,
			channel: 'Netflix Original Series',
			link: obj.nfUrl
		}
		const newData = [...data, newItem];
		setData(newData);
		localStorage.setItem('nfDatas', JSON.stringify(newData));
	};
		return (
			<Router>
				<>
					<nav>
						<div>List of top {`${data.length}`} Netflix series</div>
						<div className="paths">
							<Link to="/">Home</Link>
							<Link to="/add">Add</Link>
						</div>
					</nav>
					<Switch>
					<Route
					  exact
					  path="/"
					  render={props=>(
						  <div className="main-body">
							{
								data.map((single) => {
									return (
										<Card
											key = {`${single.id}`}
											imgSrc = {`${single.imgsrc}`}
											link = {`${single.link}`}
											title = {`${single.title}`}
											channel = {`${single.channel}`}
										/>
									)
								}
							)
						}
					</div>
					  )}
					/>
					<Route
					 exact
					 path="/add"
					 render={props=>(
						 <AddItem
						 	addItem={addItem}
						 />
					 )}
					/>
					</Switch>
				</>
			</Router>
	)
}

export default App;