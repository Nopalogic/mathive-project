import Carousel from '@/components/Carousel';
import bg from '@/public/bg-sk-2.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<section className="pt-36 h-screen dark:bg-[#16161a]">
				<div className="container">
					<div className="flex flex-wrap">
						<div className="w-full self-center px-4 lg:w-1/2">
							<h1 className="text-4xl font-bold md:text-7xl dark:text-white">
								Math
								<span className="text-violet-700">ive</span>
							</h1>
							<p className="mb-10 font-medium leading-relaxed text-slate-600">
								Website belajar matematika yang mudah dan menyenangkan. Iya bukan? <span className="font-bold text-slate-900">Bukan!</span>
							</p>
						</div>
						<div className="hidden self-center px-4 lg:w-1/2 lg:block">
							<Image src={bg} alt="bg" priority="true" />
						</div>
					</div>
				</div>
			</section>
			<section className="pt-28 pb-16 bg-slate-200 dark:bg-[#242629]">
				<div className="container">
					<div className="w-full px-4">
						<div className="mx-auto mb-16 max-w-xl text-center">
							<h4 className="mb-2 text-lg font-semibold text-violet-700">Article</h4>
							<h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Lastest Project</h2>
							<p className="text-md font-medium text-secondary md:text-lg">Ini adalah beberapa project yang telah saya buat, baik untuk pribadi maupun tugas mata kuliah.</p>
						</div>
					</div>
					<div className="w-full px-4 flex justify-center">
						<Carousel />
					</div>
					<div className="w-full pt-8 px-4 flex justify-center">
						<Link href='/modul'>
							<button className="py-3 px-6 bg-secondary rounded-md font-semibold text-white dark:text-dark">More</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
