import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="pt-11 pb-5 px-6 bg-neutral-900 text-neutral-500">
			<div className="container">
				<div className="block lg:flex">
					<div className="w-full pb-3 lg:mr-5 lg:w-1/2">
						<h6 className="my-1 text-base uppercase font-semibold text-neutral-100">About</h6>
						<p className="">
							Mathive merupakan website untuk belajar Matematika. Website ini dibuat dan dikembangkan agar teman-teman dapat belajar matematika dengan mudah. Selain itu website ini juga dibuat sebagai
							tugas besar mata kuliah aljabar linear.
						</p>
					</div>

					<div className="w-full pb-3 lg:w-1/4">
						<h6 className="my-1 text-base uppercase font-semibold text-neutral-100">Technology</h6>
						<div className="flex flex-col gap-2">
							<Link href="https://legacy.reactjs.org/">ReactJS</Link>
							<Link href="https://nextjs.org/">NextJS</Link>
							<Link href="https://tailwindcss.com/">Tailwind CSS</Link>
						</div>
					</div>

					<div className="w-full pb-3 lg:w-1/4">
						<h6 className="my-1 text-base uppercase font-semibold text-neutral-100">Quick Links</h6>
						<div className="flex flex-col gap-2">
							<Link href="/">Tentang kami</Link>
							<Link href="/modul">Modul</Link>
							<Link href="/">Contribute</Link>
							<Link href="/">Privacy Policy</Link>
							<Link href="/">Sitemap</Link>
						</div>
					</div>
				</div>

				<hr className="my-[15px] opacity-50" />

				<p className="">Copyright &copy; 2023 All Rights Reserved by Nopalogic.</p>
			</div>
		</footer>
	);
}
