import { Link } from "react-router-dom"

const FootItem = ({title, path}) => {
    return (
        <Link to={path} className="text-zinc-900 text-opacity-50 lg:text-base text-sm font-medium leading-relaxed cursor-pointer">
            {title}
        </Link>
    )

}  

export default FootItem