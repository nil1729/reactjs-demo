import React from 'react';
import Card from './components/Card';
import source from './components/Source';

function App(){
		return (
		<>
			<h1>List of top {`${source.length}`} Netflix series</h1>
			<div className="main-body">
			{
				source.map((single) => {
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
		</>
	)
}

export default App;