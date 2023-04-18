import Image from 'next/image';

export default function Card({image, title, category}) {
	return (
		<>
			<figure className="w-72 h-72 grid grid-rows-[1fr,_4rem] overflow-hidden rounded-xl shadow-lg">
				<Image src={image} alt="" className="w-full h-full object-cover" />
				<figcaption className="bg-white dark:bg-dark">
					<p className="px-2 pt-2 text-sm text-secondary">{category}</p>
					<h3 className="px-2 text-lg font-semibold dark:text-white">{title}</h3>
				</figcaption>
			</figure>
		</>
	);
}
