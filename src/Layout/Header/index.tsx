import { Logo } from "icons/logo"
import Link from "next/link";

import * as S from './styles';

export const Header = () => {
	return (
		<S.Wrapper>
			<Link href="/">
				<a>
					<Logo />
				</a>
			</Link>
		</S.Wrapper>
	)
}
