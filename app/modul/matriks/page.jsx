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
							<section className="px-4 py-4">
								<article>
									<h4 className="font-bold text-2xl">Pengertian Matriks</h4>
									<hr className="my-2 bg-slate-500" />
									<p>
										Matriks merupakan susunan dari bilangan yang diatur dalam baris dan kolom, bilangan tersebut disebut elemen matriks. Susunan bilangan-bilangan itu dibatasi oleh tanda kurung{' '}
										{'( )'} dan kurung siku {'[ ]'}.
									</p>
								</article>
								<article>
									<h4 className="font-bold text-2xl">Notasi Matriks</h4>
									<hr className="my-2 bg-slate-500" />
									<p>Suatu matriks biasanya dinotasikan dengan huruf kapital dan secara umum ditulis sebagai berikut:</p>
									<p>
										A merupakan nama matriks sedangan amn adalah elemen matriks. Deretan horizontal dari elemen matriks disebut baris dan deretan vertikal pada elemen matriks disebut kolom. Index m
										menunjukkan nomor baris pada elemen matriks dan indek n menunjukkan nomor kolom elemen matriks.
									</p>
								</article>
							</section>
						</div>
						<div className="w-full lg:w-2/6 h-screen mb-4 bg-neutral-100 rounded-2xl"></div>
					</div>
				</div>
			</section>
		</>
	);
}
