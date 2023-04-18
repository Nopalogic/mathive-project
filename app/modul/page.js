import Card from '@/components/Card';
import { modules } from '@/utils/data';
import Link from 'next/link';

export default function Modul() {
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
						<div className="block justify-center gap-7 lg:flex flex-wrap">
							{modules.map((module, i) => (
								<div key={i}>
									<Link href={module.url}>
										<Card image={module.image} title={module.title} category={module.category} />
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
