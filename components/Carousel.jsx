'use client';
import Image from 'next/image';
import Link from 'next/link';
import bg from '@/public/bg-sk-2.png';

export default function Carousel() {
	const datas = [
		{ title: 'Matriks', url: '/' },
		{ title: 'Aljabar Matriks', url: '/' },
		{ title: 'Transformasi Elementer', url: '/' },
	];

	return (
		<>
			<div className="block lg:w-3/4 lg:flex lg:flex-wrap lg:gap-5 lg:justify-center">
				{datas.map((data, i) => (
					<div key={i}>
						<Link href={data.url}>
							<figure className="w-72 h-72 grid grid-rows-[1fr,_4rem] overflow-hidden rounded-xl shadow-lg lg:grid-rows-[1fr,_0] lg:hover:grid-rows-[1fr,_4rem] duration-300">
								<Image src={bg} alt="" className="w-full h-full object-cover" />
								<figcaption className="bg-white dark:bg-dark">
									<h3 className="px-3 py-5 text-lg font-semibold">{data.title}</h3>
								</figcaption>
							</figure>
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
