import Image from 'next/image';
import { ThemeToggle } from '@/components/global/ThemeToggle';
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				hello world
				<ThemeToggle />
			</div>
		</main>
	);
}
