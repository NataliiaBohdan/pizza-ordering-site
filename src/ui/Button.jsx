/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function Button({children,disabled,to,type,onClick}) {

    const base="text-sm bg-yellow-500 tracking-wide hover:bg-yellow-400 transition-colors duration-300 focus:ring focus:ring-yellow-400 focus:bg-yellow-400 active:bg-yellow-600 disabled:cursor-not-allowed rounded-md font-semibold uppercase  inline-block "
    
    const styles={
        primary: base + " px-4 py-2 md:px-6 md:py-3 bg-brown text-yellow",
        square: base + " px-2 py-1 md:px-2 md:py-2 text-sm",
        small: base + "ml-3 px-2 py-1 md:px-3 md:py-2 text-sm bg-brown text-yellow",
        secondary: 'text-sm px-4 py-2 md:px-6 md:py-2.5 border-2 border-brown tracking-wide hover:bg-stone-400 transition-colors duration-300 focus:ring focus:ring-stone-400 focus:bg-stone-400 active:bg-stone-600 disabled:cursor-not-allowed text-stone-600 focus:text-stone-800 active:text-stone-800 hover:text-stone-800 text-sm rounded-md font-semibold uppercase  inline-block',
    }
    
    if(to) return <Link to={to} className={styles[type]}>{children}</Link>
    
    if(onClick)
    return (
        <button onClick={onClick} disabled={disabled} className={styles[type]}>
            {children}
        </button>
    );

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
