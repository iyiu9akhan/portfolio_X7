import react from 'react'

const Button =({children,className=""})=>{
    return(
        <div className={`cursor-pointer bg-[#00674F] text-[#FFFFF0] rounded-[5px] capitalize ${className}`}>
            {children}
        </div>
    )
}

export default Button