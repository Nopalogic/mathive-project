import Image from 'next/image';
import bg from '../public/bg-sk-2.png';
export default function Home() {
	return (
		<>
			<section className="pt-36 h-screen dark:bg-slate-900">
				<div className="container">
					<div className="flex flex-wrap">
						<div className="w-full self-center px-4 lg:w-1/2">
							<h1 className="text-4xl font-bold md:text-7xl dark:text-white">
								Math
								<span className="text-primary">ive</span>
							</h1>
							<p className="mb-10 font-medium leading-relaxed text-slate-600">
								Website belajar matematika yang mudah dan menyenangkan. Iya bukan? <span className="font-bold text-slate-900">Bukan!</span>
							</p>
						</div>
						<div className="hidden self-center px-4 lg:w-1/2 lg:block">
							<Image src={bg} alt='bg' priority='true'/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
