import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '../Types/Enum';

type Props = {

page: string;
setSelectedPage : (value:SelectedPage)=> void;
selectedPage : string;
className: string
}

const Links = ({page, selectedPage, setSelectedPage, className}: Props) => {
  const lowecase = page.toLocaleLowerCase().replace(/ /g,"") as SelectedPage
  return (
    <AnchorLink
    className={`${selectedPage === lowecase ? "text-primary" : ""} ${className}`}
    href={`#${lowecase}`}
    onClick={() => setSelectedPage(lowecase) }
    >
      {page}
    </AnchorLink>
  )
}

export default Links