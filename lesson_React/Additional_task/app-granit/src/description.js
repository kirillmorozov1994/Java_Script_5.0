import React from 'react';
import './css/description.css';

class Description extends React.Component {

	render() {
		return (
			<div className="section-description">
				<div className="container">
					<div className="row justify-content-left ">
						<div className="col-12 description-title">Быстрая Доставка</div>
					</div>
					<div className="row justify-content-left ">
						<div className="col-12 description-subtitle">бетона, щебня, песка <br/>и других нерудных материалов<br/> по Москве и Московской области</div>
					</div>
					<div className="row justify-content-left ">
						<div className="col-12">
							<button className="description-btn">Подробнее о доставке</button>
							<div className="description-catalog">или <a href="#catalog">перейти в каталог</a></div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}


export default Description;