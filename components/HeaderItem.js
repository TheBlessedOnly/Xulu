function HeaderItem({Icon , Title}) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white" >
        <Icon  className="h-6 mb-1 group-hover:animate-bounce"/>
        <p className="opacity-0 group-hover:opacity-100 tracking-widest ">{Title}</p>
    </div>
  )
}

export default HeaderItem