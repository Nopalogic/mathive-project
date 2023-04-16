import Card from '@/components/Card';
import Link from 'next/link';

export default function Modul() {
	const loops = [
		{ title: 'matriks', category: 'aljabar linear' },
		{ title: 'determinan', category: 'aljabar linear' },
		{ title: 'invers', category: 'aljabar linear' },
		{ title: 'gauss', category: 'aljabar linear' },
	];

	return (
		<>
			<section className="pt-24 pb-16 bg-slate-200 dark:bg-slate-800">
				<div className="container">
					<div className="w-full px-4">
						<div className="mx-auto mb-16 max-w-xl text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Lastest Project</h2>
						</div>
					</div>
					<div className="w-full px-4">
						<h2 className="mb-4 text-xl font-bold text-primary">Aljabar Linear</h2>
						<div className="block justify-center gap-7 lg:flex flex-wrap">
							{loops.map((loop, i) => (
								<div key={i}>
									<Link href={'/'}>
										<Card title={loop.title} category={loop.category} />
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
