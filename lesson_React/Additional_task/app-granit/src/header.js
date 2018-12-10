import React from 'react';
import logo from './img/logo.png';
import './css/header.css';

class Header extends React.Component {

	render() {
		return (
			<div className="header-section">
				<div className="container">
					<div className="row align-items-center">

						<div className="col-5">
							<div className="logo-img">
								<img src={logo} alt="logo"/>
								<div className="logo-desc">
									<div className="logo-title">granit</div>
									<div className="logo-subtitle">Доставка нерудных материалов</div>
								</div>
							</div>
						</div>

						<div className="col-7">
							<div className="contacts-align">
								<div className="conct-desc">
									<div className="logo-title"><a href="tel:88003421333">8 800 342-13-33</a></div>
									<div className="logo-subtitle">Бесплатный звонок по России</div>
								</div>
								<button className="btn-logo">Обратный звонок</button>
							</div>
						</div>

					</div>
				</div>
			</div>
		)
	}

}


export default Header;
