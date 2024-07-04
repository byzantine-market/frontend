import { Metadata } from 'next'
import Header from './header'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Byzantine Market',
	description: 'Bitcoin native prediction market',
	openGraph: {
		title: 'Byzantine Market',
		description: 'Byzantine Market',
		url: 'https://byzantine.market',
		images: [
			{
				url: 'https://byzantine.market/unfurl.png'
			}
		]
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="">
			<body className={`${inter.className} bg-black`}>
				<Header />
				{children}
				<Toaster />
			</body>
		</html>
	)
}
