'use client'

import React from 'react'
import Form from './form'

export default function Home() {
	return (
		<main className="flex flex-col gap-4 w-full relative max-w-screen-xl container py-14">
			<div className="gap-8 grid grid-cols-1">
				<div className="flex flex-col gap-8 items-center">
					<h1 className="font-bold text-5xl text-center">Byzantine Market</h1>
					<p className="text-md lg:text-lg text-center max-w-[600px] text-[#D4D4D8]">
						Bitcoin native prediction market.<br />Join the waitlist 👇
					</p>
					<Form />
				</div>
			</div>
		</main>
	)
}
