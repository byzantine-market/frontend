import axios from 'axios'
import querystring from 'querystring'

export default async function handler(req, res) {
	const email = req.body.email

	try {
		await axios.post(
			`${process.env.SENDY_URL}/subscribe`,
			querystring.stringify({
				list: process.env.SENDY_LIST,
				email: email,
				name: email,
				api_key: process.env.SENDY_API_KEY
			}),
			{ headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' } }
		)
		res.status(200).json({ success: true })
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
}
