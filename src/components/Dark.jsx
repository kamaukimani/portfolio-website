function Dark({isDark,onDarkMode}){

    const isColor = isDark ? '': '#';

    
    
    return(
        <div>
            {isDark ? (
                <button onClick={onDarkMode} style={{background:"#293244"}}>Dark Mode</button>
            ) :(
                <button onClick={onDarkMode} style={{background:"#E9EDF5"}}>Light Mode</button>
            )}
        </div>
    )
}

export default Dark;