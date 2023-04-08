'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 0);
		});
	}, []);

	return (
		<header className={`fixed top-0 left-0 z-10 flex w-full justify-center items-center bg-transparent ${scroll ? 'backdrop-blur-sm shadow-lg' : ''} `}>
			<div className="container">
				<div className="relative flex items-center justify-between">
					<div className="px-4">
						<Link href="/" className="block py-6 text-lg font-bold text-primary">
							Mathive
						</Link>
					</div>
					<div className="flex items-center px-4">
						<button id="hamburger" name="hamburger" type="button" className={`absolute right-4 block ${isOpen ? 'active' : ''} lg:hidden`} onClick={() => setIsOpen(!isOpen)}>
							<span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
							<span className="hamburger-line transition duration-300 ease-in-out"></span>
							<span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
						</button>

						<nav
							id="nav-menu"
							className={`absolute right-4 top-full w-full max-w-[250px] ${
								!isOpen ? 'hidden' : ''
							} rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-800 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}
						>
							<ul className="block lg:flex">
								<li className="group">
									<Link href="#home" className="mx-8 flex py-2 text-base group-hover:text-primary dark:text-white">
										Home
									</Link>
								</li>
								<li className="group">
									<Link href="#about" className="mx-8 flex py-2 text-base group-hover:text-primary dark:text-white">
										About
									</Link>
								</li>
								<li className="group">
									<Link href="#portfolio" className="mx-8 flex py-2 text-base group-hover:text-primary dark:text-white">
										Portfolio
									</Link>
								</li>
								<li className="group">
									<Link href="#clients" className="mx-8 flex py-2 text-base group-hover:text-primary dark:text-white">
										Client
									</Link>
								</li>
								<li className="group">
									<Link href="#contact" className="mx-8 flex py-2 text-base group-hover:text-primary dark:text-white">
										Contact
									</Link>
								</li>

								<li className="mt-3 flex items-center pl-8 lg:mt-0">
									<span className="lg:hidden mr-16">Theme</span>
									<button className="flex items-center gap-2 px-4 py-2 shadow-lg rounded-md bg-slate-300 group-hover:text-primary lg:bg-transparent lg:shadow-none">
										<FontAwesomeIcon icon={faSun} />
										<span className="lg:hidden">Light</span>
									</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}
