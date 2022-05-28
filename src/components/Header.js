import React from 'react'
// rfc + TAB
export default function Header() {
  return (
    <header className='header'>
        <div className='logo'>
    		<a className='logo' href='/'>ShopName</a>
        </div>
		<div className='header-items'>
			<a className='header-items__item' href='#'>Каталог</a>
			<a className='header-items__item' href='#'>О нас</a>
			<a className='header-items__item' href='#'>Блог</a>
			<a className='header-items__item' href='#'>Профиль</a>
		</div>
    </header>
  )
} 
