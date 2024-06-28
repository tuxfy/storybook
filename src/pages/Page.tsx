import React from 'react'

import { Header } from '../components/Header'
import './page.css'

type User = {
	name: string
}

export const Page: React.FC = () => {
	const [user, setUser] = React.useState<User>()

	return (
		<article>
			<Header
				title="My Title"
				user={user}
				onLogin={() => setUser({ name: 'Jane Doe' })}
				onLogout={() => setUser(undefined)}
				onCreateAccount={() => setUser({ name: 'Jane Doe' })}
			/>

			<section className="storybook-page">
				<h2>My Title</h2>
			</section>
		</article>
	)
}
