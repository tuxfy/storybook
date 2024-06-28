import { Button } from './Button'
import './header.css'

type User = {
	name: string
}

interface HeaderProps {
	title: string
	user?: User
	onLogin?: () => void
	onLogout?: () => void
	onCreateAccount?: () => void
}

export const Header = ({ title, user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
	<header>
		<div className="storybook-header">
			<div>
				<h1>{title}</h1>
			</div>
			<div>
				{user ? (
					<>
						<span className="welcome" data-testid="welcome">
							Hallo, <b>{user.name}</b>!
						</span>
						<Button
							size="small"
							onClick={onLogout}
							label="Log out"
							data-testid="logout"
						/>
					</>
				) : (
					<>
						<Button size="small" onClick={onLogin} label="Login" data-testid="login" />
						<Button
							primary
							size="small"
							onClick={onCreateAccount}
							label="Sign up"
							data-testid="signup"
						/>
					</>
				)}
			</div>
		</div>
	</header>
)
