import Link from 'next/link'
import styled from '@emotion/styled'

const Navigation = styled.div`
  background-color: ${props => props.theme.colors.navBackground};
`

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
`
const Li = styled.li`
  padding: 20px 10px;
  cursor: pointer;
`
const ItemNav = styled.a`
    color: ${props => props.theme.colors.white};
    text-decoration: none;
`

export default function Navbar(){
    return (
      <Navigation bg="navBackground">
        <Ul>
          <Li>
            <Link href="/"><ItemNav>Home</ItemNav></Link>
          </Li>
          <Li>
            <Link href="/about"><ItemNav>About</ItemNav></Link>
          </Li>
        </Ul>
      </Navigation>   
    )
}