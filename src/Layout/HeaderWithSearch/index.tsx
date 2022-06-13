import { Search } from "components/Search";
import { Logo } from "icons/logo"
import Link from "next/link";

import * as S from './styles';

export const HeaderWithSearch = () => {
	return (
		<S.Wrapper>
			<Link href="/">
				<a>
					<Logo />
				</a>
			</Link>

			<Search />
		</S.Wrapper>
	)
}
