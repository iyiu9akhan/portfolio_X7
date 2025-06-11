import react from 'react'

const Button =({children,className=""})=>{
    return(
        <div className={`cursor-pointer bg-myGreen text-[#FFFFF0] rounded-[5px] capitalize ${className}`}>
            {children}
        </div>
    )
}

export default Button