'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import isEmail from '@/utils/is-email'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

//href={`https://twitter.com/intent/tweet?text=${intent}`}

export default function Form() {
	const [email, setEmail] = useState('')
	const { toast } = useToast()

	const handleChangeEmail = useCallback((evt) => {
		setEmail(evt.target.value)
	}, [])

	const handleSubmit = useCallback(
		async (evt) => {
			evt.stopPropagation()
			evt.preventDefault()

			const valid = isEmail(email)
			if (!valid) {
				return
			}

			const intent = encodeURIComponent(
				`Just signed up for @byzantinexbt! The Bitcoin native prediction market.\n\nCheck it out here 👇\n\nhttps://byzantine.market`
			)

			try {
				await axios.post('/api/subscribe', { email })
				toast({
					title: 'Subscribed!',
					description: 'You joined the waitlist',
					action: (
						<a href={`https://x.com/intent/post?text=${intent}`} target="_blank">
							<ToastAction altText="Try again">Share it</ToastAction>
						</a>
					)
				})
				setEmail('')
			} catch (e) {}
		},
		[email]
	)

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 lg:flex-row">
			<Input value={email} onChange={handleChangeEmail} placeholder="Enter your email" />
			<Button className="flex gap-2 w-[200px]" type="submit">
				Join Waitlist
			</Button>
		</form>
	)
}
