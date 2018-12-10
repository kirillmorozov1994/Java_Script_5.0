import React from 'react';
import './css/menu.css';

class Menu extends React.Component {

	render() {
		return (
			<div className="menu-section">
				<div className="container">
					<div className="menu-section_wrap">
						<div className="row justify-content-center align-items-center">

							<div className="col-2"><div className="menu-desc">Главная</div></div>
							<div className="col-2"><div className="menu-desc">Каталог</div></div>
							<div className="col-2"><div className="menu-desc">Услуги</div></div>
							<div className="col-2"><div className="menu-desc">Доставка</div></div>
							<div className="col-2"><div className="menu-desc">О компании</div></div>
							<div className="col-2"><div className="menu-desc">Контакты</div></div>

						</div>
					</div>
				</div>
			</div>
		)
	}

}


export default Menu;