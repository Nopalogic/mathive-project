import Link from 'next/link';

// referensi / sources
// https://codepen.io/scanfcode/pen/MEZPNd

export default function Footer() {
	return (
		<footer className='pt-11 pb-5 px-6 bg-neutral-900 text-neutral-500'>
			<div className=''>
				<div className="block lg:flex">
					<div className='w-full pb-3 lg:w-1/2'>
						<h6 className='my-1 text-base uppercase font-semibold text-neutral-100'>About</h6>
						<p className=''>
							Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the
							code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
							Algorithm.
						</p>
					</div>

					<div className='w-full pb-3 lg:w-1/4'>
						<h6 className='my-1 text-base uppercase font-semibold text-neutral-100'>Categories</h6>
						<div className='flex flex-col'>
							<Link href="http://scanfcode.com/category/front-end-development/">UI Design</Link>
							<Link href="http://scanfcode.com/category/back-end-development/">PHP</Link>
							<Link href="http://scanfcode.com/category/java-programming-language/">Java</Link>
							<Link href="http://scanfcode.com/category/android/">Android</Link>
							<Link href="http://scanfcode.com/category/templates/">Templates</Link>
						</div>
					</div>

					<div className='w-full pb-3 lg:w-1/4'>
						<h6 className='my-1 text-base uppercase font-semibold text-neutral-100'>Quick Links</h6>
						<div className='flex flex-col'>
							<Link href="http://scanfcode.com/about/">About Us</Link>
							<Link href="http://scanfcode.com/contact/">Contact Us</Link>
							<Link href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</Link>
							<Link href="http://scanfcode.com/privacy-policy/">Privacy Policy</Link>
							<Link href="http://scanfcode.com/sitemap/">Sitemap</Link>
						</div>
					</div>
				</div>

				<hr className='my-[15px] opacity-50' />

				<p className=''>
					Copyright &copy; 2017 All Rights Reserved by <a href="#">Scanfcode</a>.
				</p>
			</div>
		</footer>
	);
}
