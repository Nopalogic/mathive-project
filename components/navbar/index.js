'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 z-10 flex w-full justify-center items-center bg-neutral-900">
			<div className="container">
				<div className="relative flex items-center justify-between">
					<div className="px-4">
						<a href="#home" className="block py-6 text-lg font-bold text-neutral-100">
							Brand
						</a>
					</div>
					<div className="flex items-center px-4">
						<button id="hamburger" name="hamburger" type="button" className={`absolute right-4 block lg:hidden ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
							<span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
							<span className="hamburger-line transition duration-300 ease-in-out"></span>
							<span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
						</button>

						<nav
							id="nav-menu"
							className={`absolute right-4 top-full w-full ${
								!isOpen ? 'hidden' : ''
							} max-w-[250px] rounded-lg bg-neutral-900 py-5 shadow-lg dark:bg-dark dark:shadow-slate-800 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}
						>
							<ul className="block lg:flex">
								<li className="group">
									<Link href="#home" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">
										Home
									</Link>
								</li>
								<li className="group">
									<Link href="#about" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">
										About
									</Link>
								</li>
								<li className="group">
									<a href="#portfolio" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">
										Portfolio
									</a>
								</li>
								<li className="group">
									<Link href="#clients" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">
										Client
									</Link>
								</li>
								<li className="group">
									<Link href="#contact" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">
										Contact
									</Link>
								</li>
								{/* <li className="mt-3 flex items-center pl-8 lg:mt-0">
									<div className="flex">
										<span className="mr-2 text-sm text-slate-500">Light</span>
										<input type="checkbox" id="dark-toggle" className="hidden" />
										<label for="dark-toggle">
											<div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
												<div className="toggle h-4 w-4 rounded-full bg-white transition duration-500 ease-in-out"></div>
											</div>
										</label>
										<span className="ml-2 text-sm text-slate-500">Dark</span>
									</div>
								</li> */}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}
