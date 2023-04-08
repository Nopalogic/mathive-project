'use client'
import Image from 'next/image';
import bg from '@/public/bg-sk-2.png'

export default function Carousel() {
	const datas = ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'];

	return (
		<>
			<div className="block lg:w-3/4 lg:flex lg:flex-wrap lg:gap-5 lg:justify-center">
				{datas.map((data, i) => (
					<figure key={i} className="w-72 h-72 grid grid-rows-[1fr,_4rem] overflow-hidden rounded-xl shadow-lg lg:grid-rows-[1fr,_0] lg:hover:grid-rows-[1fr,_4rem] duration-300">
						<Image src={bg} alt="" className="w-full h-full object-cover" />
						<figcaption className="bg-white dark:bg-dark">
							<h3 className="px-3 py-5 text-lg font-semibold">Title</h3>
						</figcaption>
					</figure>
				))}
			</div>
		</>
	);
}
