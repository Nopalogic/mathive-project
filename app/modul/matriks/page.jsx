// 'use client'
import { InlineMath } from 'react-katex';

export default function Matriks() {
	return (
		<>
			<section className="pt-24 pb-16 bg-slate-200 dark:bg-slate-800">
				<div className="container">
					<div className="w-full px-4">
						<div className="mx-auto max-w-xl text-center">
							<h2 className="mb-8 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Matriks</h2>
						</div>
					</div>
					<div className="block lg:flex lg:gap-4">
						<div className="w-full lg:w-4/6 h-screen mb-4 bg-neutral-100 rounded-2xl">
							<section className='px-4 py-4'>
								<h4 className='font-bold text-2xl'>Pengertian Matriks</h4>
								<hr className='my-2 bg-slate-500' />
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ad culpa provident consequatur suscipit earum, hic illum quibusdam tempore architecto commodi fugiat, praesentium
									neque blanditiis doloremque distinctio id omnis, quidem amet. Doloremque sunt dolores libero quasi tempora cupiditate cum, esse quo, dolore dignissimos provident numquam doloribus
									quos pariatur ut voluptatem.
								</p>
							</section>
						</div>
						<div className="w-full lg:w-2/6 h-screen mb-4 bg-neutral-100 rounded-2xl"></div>
					</div>
				</div>
			</section>
		</>
	);
}
