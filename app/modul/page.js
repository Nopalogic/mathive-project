import Image from "next/image";

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
            <h2 className="mb-4 text-xl font-bold text-primary">Aljabar Linear</h2>
            <figure className="w-72 h-72 grid grid-rows-[1fr,_4rem] overflow-hidden rounded-xl shadow-lg">
								<Image src={''} alt="" className="w-full h-full object-cover" />
								<figcaption className="bg-white dark:bg-dark">
                  <p className="px-2 pt-2 text-sm text-secondary">Aljabar Linear</p>
									<h3 className="px-2 text-lg font-semibold">TItle</h3>
								</figcaption>
							</figure>
          </div>
				</div>
			</section>
		</>
	);
}
