'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
	return (
		<header className="bg-black justify-between items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex justify-between h-16 max-w-screen-xl items-center">
				<div className="flex items-center gap-4">
					<p className="font-bold text-xl">Byzantine</p>
				</div>
				<div className="flex items-center gap-3">
					<a className="text-sm text-white" href="https://github.com" target="_blank">
						<img className="h-4 w-4" src="/github.svg" />
					</a>
					<a className="text-sm text-white" href="https://x.com/byzantinexbt" target="_blank">
						<img className="h-4 w-4" src="/twitter.svg" />
					</a>
					<a className="text-sm text-white" href="https://t.me/+ifidN8vkqxRjYjIx" target="_blank">
						<img className="h-4 w-4" src="/telegram.svg" />
					</a>
				</div>
			</div>
		</header>
	)
}
